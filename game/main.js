const statusEl = document.querySelector("#status");
const sceneTitleEl = document.querySelector("#scene-title");
const speakerEl = document.querySelector("#speaker");
const lineEl = document.querySelector("#line");

async function loadScene() {
  try {
    const response = await fetch("../data/scene_intro.json");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const scene = await response.json();
    const firstNode = scene.nodes?.[scene.start_node];

    if (!firstNode) {
      throw new Error("start_node 未找到对应节点");
    }

    sceneTitleEl.textContent = scene.title;
    speakerEl.textContent = firstNode.speaker || "旁白";
    lineEl.textContent = firstNode.text || "";
    statusEl.textContent = `已加载场景：${scene.scene_id}`;

    console.log("Scene loaded:", scene);
    console.log("First node:", firstNode);
  } catch (error) {
    statusEl.textContent = "读取失败：请通过本地静态服务器打开页面。";
    lineEl.textContent = String(error);
    console.error("Failed to load scene data.", error);
  }
}

loadScene();
