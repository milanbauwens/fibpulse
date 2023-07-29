export const episodeHTML = (data) => {
  const html = `
  <html>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@700&family=Mulish:wght@500;700&display=swap" rel="stylesheet">
    <title>Hartmoment - ${data.startDate}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          padding: 56px 80px;
        }

        h1 {
          margin: 0;
          color: #052626;
          font-family: 'Bitter', sans-serif;
          font-weight: 700;
          font-size: 28px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 32px;
        }

        .container--bg {
          height: fit-content;
          width: 100%;
          display: flex; 
          justify-content: space-between;
        }

        .user-data {
          margin-bottom: 32px;
        }

        .content-item {
          display: flex; 
          gap: 32px;
          width: 100%;
          justify-content: space-between;
        }

        .content-item div {
          width: 50%;
        }

        .content {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 32px;
        }

        .text--medium {
            color: #052626;
            font-family: 'Mulish', sans-serif;
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 4px;
        }

        .text--mb {
          margin-bottom: 12px;
        }

        .text--bold {
          color: #052626;
          font-family: 'Mulish', sans-serif;
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 4px;
        }
      }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <p class="text--medium">Overzicht hartmoment</p>
          <h1>${data.startDate}</h1>
        </div>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1414_1306)">
          <path d="M13.3565 0H3.33913C1.49498 0 0 1.51768 0 3.38983V13.5593C0 15.4315 1.49498 16.9492 3.33913 16.9492H13.3565C15.2007 16.9492 16.6957 15.4315 16.6957 13.5593V3.38983C16.6957 1.51768 15.2007 0 13.3565 0Z" fill="#87B1BA"/>
          <path d="M20.6612 8.05078H10.6438C8.79967 8.05078 7.30469 9.56846 7.30469 11.4406V21.6101C7.30469 23.4823 8.79967 24.9999 10.6438 24.9999H20.6612C22.5054 24.9999 24.0003 23.4823 24.0003 21.6101V11.4406C24.0003 9.56846 22.5054 8.05078 20.6612 8.05078Z" fill="#168087"/>
          <path d="M12.313 16.9492L12 16.7373H12.4174L12.313 16.9492Z" fill="#FAFEFF"/>
          <path d="M7.30469 16.9491V12.0762L12.3134 16.9491H7.30469Z" fill="#87B1BA"/>
          <path d="M7.30469 21.8221L12.3134 16.9492H7.30469V21.8221Z" fill="#12666C"/>
          <path d="M16.6951 3.17773L11.582 7.73282H16.6951V3.17773Z" fill="#57818A"/>
          <g filter="url(#filter0_d_1414_1306)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3093 6.86629C11.0576 5.38066 8.97014 4.98102 7.40177 6.34142C5.83338 7.70184 5.61258 9.97636 6.84424 11.5853C7.86828 12.9231 10.9674 15.7444 11.9831 16.6576C12.0967 16.7598 12.1536 16.8109 12.2198 16.831C12.2777 16.8485 12.341 16.8485 12.3988 16.831C12.4651 16.8109 12.5219 16.7598 12.6355 16.6576C13.6513 15.7444 16.7504 12.9231 17.7744 11.5853C19.0061 9.97636 18.8122 7.68752 17.2169 6.34142C15.6215 4.99534 13.5611 5.38066 12.3093 6.86629Z" fill="white"/>
          </g>
          </g>
          <defs>
          <filter id="filter0_d_1414_1306" x="-9.94727" y="-10.4912" width="44.5215" height="43.335" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="8"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1414_1306"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1414_1306" result="shape"/>
          </filter>
          <clipPath id="clip0_1414_1306">
          <rect width="24" height="25" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>

      <div class="user-data">
        <p class="text--medium text--mb">Gegevens gebruiker:</p>
        <div class="container--bg">
          <div>
            <p class="text--bold">Naam</p>
            <p class="text--medium">${data.fullName}</p>
          </div>
          <div>
            <p class="text--bold">Geboortejaar</p>
            <p class="text--medium">${data.yearOfBirth}</p>
          </div>
          <div>
            <p class="text--bold">Hartritmestoornis</p>
            <p class="text--medium">${data.heartDisorder}</p>
          </div>
        </div>
      </div>

      <div>
        <p class="text--medium text--mb">Hartmoment vaststellingen:</p>
        <div class="content">
          <div class="content-item">
            <div>
              <p class="text--bold">Begin moment</p>
              <p class="text--medium">${data.start}</p>
            </div>
            <div>
              <p class="text--bold">Einde moment</p>
              <p class="text--medium">${data.end}</p>
            </div>
          </div>
          <div class="content-item">
            <div>
              <p class="text--bold">Hartslag</p>
              <p class="text--medium">${data.pulse} slagen per minuut</p>
            </div>
            <div>
              <p class="text--bold">Hartslag handmatig vastgesteld </p>
              <p class="text--medium">${data.isMedicalApproved}</p>
            </div>
          </div>
          <div class="content-item">
            <div>
              <p class="text--bold">Activiteit voor moment</p>
              <p class="text--medium">${data.activity}</p>
            </div>
            <div>
              <p class="text--bold">Symptomen</p>
              <p class="text--medium">${data.symptoms.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p class="text--bold">Opmerkingen</p>
        <p class="text--medium">${data.notes}</p>
      </div>

    </body>
  </html>
  `;

  return html;
};
