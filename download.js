document.querySelectorAll('.download-link').forEach((link) => {
  link.addEventListener('click', async (event) => {
    if (window.location.protocol === 'file:') return;
    event.preventDefault();
    try {
      const response = await fetch(link.href);
      if (!response.ok) throw new Error('Download unavailable');
      const file = await response.blob();
      const temporaryUrl = URL.createObjectURL(file);
      const downloader = document.createElement('a');
      downloader.href = temporaryUrl;
      downloader.download = link.download || 'Encrypt_It.py';
      document.body.appendChild(downloader);
      downloader.click();
      downloader.remove();
      URL.revokeObjectURL(temporaryUrl);
    } catch {
      const fallback = document.createElement('a');
      fallback.href = link.href;
      fallback.download = link.download || 'Encrypt_It.py';
      document.body.appendChild(fallback);
      fallback.click();
      fallback.remove();
    }
  });
});
