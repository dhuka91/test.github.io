document.addEventListener('DOMContentLoaded', () => {
  const originalText = document.getElementById('originalText');
  const rewrittenText = document.getElementById('rewrittenText');
  const counter = document.getElementById('counter');
  const rewriteBtn = document.getElementById('rewriteBtn');
  const copyBtn = document.getElementById('copyBtn');
  const clearBtn = document.getElementById('clearBtn');

  originalText.addEventListener('input', () => {
    const text = originalText.value;
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const chars = text.length;
    counter.textContent = `Words: ${words} | Characters: ${chars}`;
  });

  rewriteBtn.addEventListener('click', rewriteText);
  copyBtn.addEventListener('click', copyToClipboard);
  clearBtn.addEventListener('click', clearText);

  async function rewriteText() {
    const input = originalText.value.trim();
    if (!input) {
      rewrittenText.value = "Please enter some text to rewrite.";
      return;
    }

    rewrittenText.value = "Rewriting... Please wait.";
    rewrittenText.classList.add('loading');

    try {
      const response = await fetch("/api/rewrite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.rewrittenText) {
        throw new Error("No response from the API");
      }

      rewrittenText.value = data.rewrittenText.trim();
      rewrittenText.classList.remove('loading');
      
    } catch (error) {
      console.error("Rewrite error:", error);
      rewrittenText.value = `Error: ${error.message || "Failed to rewrite content. Please try again."}`;
      rewrittenText.classList.remove('loading');
      rewrittenText.classList.add('error');
    }
  }

  function copyToClipboard() {
    if (!rewrittenText.value.trim()) return;
    rewrittenText.select();
    document.execCommand("copy");
    // Visual feedback
    const originalHTML = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
      copyBtn.innerHTML = originalHTML;
    }, 2000);
  }

  function clearText() {
    originalText.value = "";
    rewrittenText.value = "";
    rewrittenText.classList.remove('loading', 'error');
    counter.textContent = "Words: 0 | Characters: 0";
  }
});
