const referralLink = "https://yourchallenge.com/referral";
const copyBtn = document.getElementById('copyReferralBtn');
copyBtn.addEventListener('click', function() {
  navigator.clipboard.writeText(referralLink).then(function() {
    copyBtn.classList.add('copied');
    copyBtn.innerHTML = '<i class="fa-regular fa-clipboard"></i> Copied!';
    setTimeout(() => {
      copyBtn.classList.remove('copied');
      copyBtn.innerHTML = '<i class="fa-regular fa-clipboard"></i> Copy Referral Link';
    }, 1800);
  });
});