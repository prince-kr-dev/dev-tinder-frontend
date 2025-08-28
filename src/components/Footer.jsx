import React from "react";

function Footer() {
  return (
    <footer className="bg-base-300 text-neutral-content p-3 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side */}
        <aside className="flex items-center gap-3 text-center md:text-left">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <path d="M12 0C5.37258 0 0 5.3725 0 12C0 18.6275 5.37258 24 12 24C18.6274 24 24 18.6275 24 12C24 5.3725 18.6274 0 12 0Z" />
          </svg>
          <p className="text-sm md:text-base">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </aside>

        {/* Right Side - Social Links */}
        <nav className="flex gap-6">
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 
              4.932 0 0 0 2.165-2.724 9.865 
              9.865 0 0 1-3.127 1.195 4.918 
              4.918 0 0 0-8.384 4.482A13.957 
              13.957 0 0 1 1.671 3.149a4.917 
              4.917 0 0 0 1.523 6.574 4.903 
              4.903 0 0 1-2.229-.616v.062a4.918 
              4.918 0 0 0 3.946 4.827 4.902 
              4.902 0 0 1-2.224.084 4.919 
              4.919 0 0 0 4.588 3.417A9.867 
              9.867 0 0 1 0 19.54a13.94 
              13.94 0 0 0 7.548 2.212c9.056 
              0 14.01-7.496 14.01-13.986 
              0-.213-.005-.425-.014-.636A10.025 
              10.025 0 0 0 24 4.557z"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 
              4.85.07 1.366.062 2.633.35 
              3.608 1.325.975.975 1.262 
              2.242 1.324 3.608.058 1.266.07 
              1.646.07 4.834s-.012 3.568-.07 
              4.834c-.062 1.366-.349 2.633-1.324 
              3.608-.975.975-2.242 1.262-3.608 
              1.324-1.266.058-1.646.07-4.834.07s-3.568-.012-4.834-.07c-1.366-.062-2.633-.349-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 
              15.635 2.163 15.255 2.163 
              12s.012-3.568.07-4.834c.062-1.366.349-2.633 
              1.324-3.608.975-.975 2.242-1.262 
              3.608-1.324C8.432 2.175 8.812 2.163 
              12 2.163m0-2.163C8.741 0 8.332.014 
              7.052.072 5.775.13 4.638.478 
              3.678 1.438c-.96.96-1.309 
              2.097-1.366 3.374C2.254 6.092 2.24 
              6.5 2.24 9.759v4.482c0 3.259.014 
              3.667.072 4.947.057 1.277.406 
              2.414 1.366 3.374.96.96 2.097 
              1.309 3.374 1.366 1.28.058 
              1.689.072 4.948.072s3.667-.014 
              4.947-.072c1.277-.057 2.414-.406 
              3.374-1.366.96-.96 1.309-2.097 
              1.366-3.374.058-1.28.072-1.688.072-4.947V9.759c0-3.259-.014-3.667-.072-4.947-.057-1.277-.406-2.414-1.366-3.374-.96-.96-2.097-1.309-3.374-1.366C15.667.014 15.259 
              0 12 0z"
              />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 
              5v14c0 2.761 2.239 5 5 
              5h14c2.761 0 5-2.239 
              5-5v-14c0-2.761-2.239-5-5-5zm-11 
              19h-3v-10h3v10zm-1.5-11.268c-.966 
              0-1.75-.79-1.75-1.764s.784-1.764 
              1.75-1.764 1.75.79 
              1.75 1.764-.784 1.764-1.75 
              1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.868 
              0-2.155 1.459-2.155 
              2.966v5.699h-3v-10h2.885v1.367h.041c.402-.762 
              1.385-1.562 2.849-1.562 3.047 
              0 3.61 2.007 3.61 4.617v5.578z"
              />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
