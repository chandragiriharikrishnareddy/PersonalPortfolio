const mainContent = document.querySelector('main');

if (window.location.pathname === '/job-listings.html') {
  mainContent.innerHTML = '<h2>Job Listings</h2><p>List of job openings with essential details.</p>';
} else if (window.location.pathname === '/employer-dashboard.html') {
  mainContent.innerHTML = '<h2>Employer Dashboard</h2><p>Account management and job posting.</p>';
}