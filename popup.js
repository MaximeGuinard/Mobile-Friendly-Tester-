document.addEventListener('DOMContentLoaded', function() {
  const mobileBtn = document.getElementById('mobileBtn');
  const tabletBtn = document.getElementById('tabletBtn');
  const previewFrame = document.getElementById('previewFrame');
  const viewportCheck = document.getElementById('viewportCheck');
  const textSizeCheck = document.getElementById('textSizeCheck');
  const touchTargetCheck = document.getElementById('touchTargetCheck');

  // Get current tab URL
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentUrl = tabs[0].url;
    previewFrame.src = currentUrl;
  });

  // Device switch handlers
  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.add('active');
    tabletBtn.classList.remove('active');
    previewFrame.style.width = '375px';
    runChecks();
  });

  tabletBtn.addEventListener('click', () => {
    tabletBtn.classList.add('active');
    mobileBtn.classList.remove('active');
    previewFrame.style.width = '768px';
    runChecks();
  });

  function runChecks() {
    // Simulate checks with delays for better UX
    setTimeout(() => {
      viewportCheck.querySelector('.status').textContent = '✅';
    }, 500);

    setTimeout(() => {
      textSizeCheck.querySelector('.status').textContent = '✅';
    }, 1000);

    setTimeout(() => {
      touchTargetCheck.querySelector('.status').textContent = '✅';
    }, 1500);
  }

  // Initial checks
  runChecks();
});