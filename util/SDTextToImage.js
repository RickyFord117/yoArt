import axios from "axios";

const API_KEY = "vTaKSafGbNFefKNf3WRUFPasjFyhK2J73ZXVvVgeZrr9HtFiDv2bb9Q68iCg";

export async function sendPrompt(prompt) {
  const url = "https://stablediffusionapi.com/api/v3/text2img";
  const requestBody = {
    key: API_KEY,
    prompt: prompt,
    negative_prompt: null,
    width: "800",
    height: "800",
    samples: "1",
    num_inference_steps: "20",
    seed: null,
    guidance_scale: 7.5,
    safety_checker: "yes",
    multi_lingual: "no",
    panorama: "no",
    self_attention: "no",
    upscale: "no",
    embeddings_model: null,
    webhook: null,
    track_id: null,
  };

  const response = await axios.post(url, requestBody, {
    "Content-Type": "application/json",
  });

  return response.data;
}
