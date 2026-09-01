"use client";

import { useEffect, useRef, useState } from "react";
import {
  FilesetResolver,
  HandLandmarker,
  DrawingUtils,
} from "@mediapipe/tasks-vision";

export default function DeteksiPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    let handLandmarker: HandLandmarker;
    let animationFrameId: number;
    let stream: MediaStream | null = null;

    const setup = async () => {
      try {
        // Load MediaPipe
       const vision = await FilesetResolver.forVisionTasks(
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
);
        handLandmarker = await HandLandmarker.createFromOptions(vision, {
          
          baseOptions: {
  modelAssetPath: "/models/hand_landmarker.task",
 },

          runningMode: "VIDEO",

          numHands: 1,

          minHandDetectionConfidence: 0.5,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });

        // Request camera
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: 1280,
            height: 720,
            facingMode: "user",
          },
          audio: false,
        });

        if (!videoRef.current) return;

        videoRef.current.srcObject = stream;

        await videoRef.current.play();

        setIsLoading(false);

        detectHands();
    } catch (error) {
  console.error("GAGAL MENJALANKAN MEDIAPIPE");
  console.error(error);
  console.error(
    "Error detail:",
    error instanceof Error ? error.message : String(error)
  );

  setIsLoading(false);
}    };

    const detectHands = () => {
      if (!videoRef.current || !canvasRef.current || !handLandmarker) {
        return;
      }

      const video = videoRef.current;
      const canvas = canvasRef.current;

      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const results = handLandmarker.detectForVideo(
        video,
        performance.now()
      );

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (results.landmarks.length > 0) {
        setDetected(true);

        const drawingUtils = new DrawingUtils(ctx);

        for (const landmarks of results.landmarks) {
          drawingUtils.drawConnectors(
            landmarks,
            HandLandmarker.HAND_CONNECTIONS,
            {
              lineWidth: 4,
            }
          );

          drawingUtils.drawLandmarks(landmarks, {
            radius: 5,
          });
        }
      } else {
        setDetected(false);
      }

      animationFrameId = requestAnimationFrame(detectHands);
    };

    setup();

    return () => {
      cancelAnimationFrame(animationFrameId);

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      handLandmarker?.close();
    };
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-medium text-blue-400">
            ISYARATKU
          </p>

          <h1 className="text-4xl font-bold">
            Deteksi Bahasa Isyarat
          </h1>

          <p className="mt-3 text-neutral-400">
            Letakkan tangan kamu di depan kamera
          </p>
        </div>

        {/* CAMERA */}
        <div className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">

        <video
  ref={videoRef}
  className="h-full w-full object-cover scale-x-[-1]"
  playsInline
  muted
/>
  <canvas
  ref={canvasRef}
  className="pointer-events-none absolute inset-0 h-full w-full scale-x-[-1]"
/>
          {/* LOADING */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-950/90">
              <div className="text-center">
                <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-neutral-700 border-t-blue-500" />

                <p className="text-sm text-neutral-300">
                  Menyiapkan kamera...
                </p>
              </div>
            </div>
          )}

          {/* STATUS */}
          {!isLoading && (
            <div className="absolute left-5 top-5">
              <div className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 backdrop-blur-md">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    detected
                      ? "bg-green-400"
                      : "bg-yellow-400"
                  }`}
                />

                <span className="text-sm">
                  {detected
                    ? "Tangan terdeteksi"
                    : "Mencari tangan..."}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* RESULT */}
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">

            <p className="text-sm text-neutral-500">
              HASIL DETEKSI
            </p>

            <h2 className="mt-2 text-7xl font-black text-blue-500">
              —
            </h2>

            <p className="mt-3 text-neutral-400">
              Sistem sedang mempelajari bentuk tangan...
            </p>

          </div>
        </div>

      </div>
    </main>
  );
}