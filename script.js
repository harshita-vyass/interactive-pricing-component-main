const slider = document.getElementById("slider");
const billingToggle = document.getElementById("billingToggle");
const price = document.getElementById("price");
const pageviews = document.getElementById("pageviews");

const pricingData = [
  { views: "10K", monthly: 8 },
  { views: "50K", monthly: 12 },
  { views: "100K", monthly: 16 },
  { views: "500K", monthly: 24 },
  { views: "1M", monthly: 36 },
];
function updateSliderBackground() {
  const min = slider.min;
  const max = slider.max;
  const val = slider.value;

  const percentage = ((val - min) / (max - min)) * 100;

  slider.style.background = `linear-gradient(to right, var(--Strong_Cyan) ${percentage}%, var(--Grayish_Blue) ${percentage}%)`;
}

function updatePricing() {
  const index = slider.value;
  const isYearly = billingToggle.checked;
  const monthlyPrice = pricingData[index].monthly;
  const finalPrice = isYearly ? (monthlyPrice * 12 * 0.75 / 12).toFixed(2) : monthlyPrice.toFixed(2);
  
  pageviews.textContent = `${pricingData[index].views} Pageviews`;
  price.textContent = `$${finalPrice}`;
  updateSliderBackground()
}

slider.addEventListener("input", updatePricing);
billingToggle.addEventListener("change", updatePricing);

updatePricing(); 
