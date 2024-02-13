import axios from "axios";

// eventually store this on a backend before going live obviously
const API_KEY = "sk-N0sEW5Ld36fYSim9PbvuzDrYfx1geYVays9v41BZC3nHuMhE";

export async function sendPrompt(engineId, prompt) {
  const url = `https://api.stability.ai/v1/generation/${engineId}/text-to-image`;
  const requestBody = {
    cfg_scale: 7,
    clip_guidance_preset: "FAST_BLUE",
    height: 512,
    width: 512,
    sampler: "K_DPM_2_ANCESTRAL",
    samples: 1,
    steps: 30,
    text_prompts: [
      {
        text: prompt,
        weight: 1,
      },
    ],
  };

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: API_KEY,
  };

  const response = await axios.post(url, requestBody, { headers: headers });

  let base64String = "";
  const artifact = response.data.artifacts[0];

  console.log(artifact);
  if (artifact.finishReason === "SUCCESS") {
    base64String = artifact.base64;
  }

  const dataUri = `data:image/png;base64,${base64String}`;
  return dataUri;
}
