let cached;

// Returns false when the browser has WebGL disabled (e.g. hardware acceleration off),
// so 3D canvases can be skipped instead of throwing "Error creating WebGL context".
export const isWebGLAvailable = () => {
  if (cached !== undefined) return cached;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    cached = !!gl;
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    cached = false;
  }
  return cached;
};
