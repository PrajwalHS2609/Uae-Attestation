import "./globals.css";
import NavBar from "./../Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./../Components/Footer/Footer";
import PopupForm from "./../Components/PopupForm/PopupForm";
import Whatsapp from "./../Components/Whatsapp/Whatsapp";
import "@/Components/style.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content="RrHWWc_n8gCcFEkE5vpcO_OP-66mmYBPPrcC_Z5Yln8"
        />
        <link rel="icon" type="i0mage/png" href="./favicon.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is UAE attestation and why is it required?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "UAE attestation is the official verification of Indian-issued documents to make them legally valid for employment, education, business, and residency purposes in the United Arab Emirates.",
                },
              },
              {
                "@type": "Question",
                name: "Which documents require UAE attestation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Educational certificates, personal documents such as birth and marriage certificates, and commercial documents like MOA, POA, and invoices require UAE attestation depending on the purpose of use.",
                },
              },
              {
                "@type": "Question",
                name: "How long does UAE attestation take in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "UAE attestation usually takes around 5 working days, depending on the document type and issuing authority.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of UAE attestation in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of UAE attestation in Bangalore typically ranges from ₹5,000 to ₹15,000, based on the type of document and urgency.",
                },
              },
              {
                "@type": "Question",
                name: "Is UAE attestation mandatory for employment visas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UAE attestation is mandatory for employment visas and professional licensing in the UAE.",
                },
              },
              {
                "@type": "Question",
                name: "Who issues UAE attestation in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "UAE attestation is carried out through State HRD or SDM, the Ministry of External Affairs (MEA), and the UAE Embassy in India, followed by MOFA attestation in the UAE if required.",
                },
              },
              {
                "@type": "Question",
                name: "Can UAE attestation be done without visiting government offices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, government-approved agencies like Goodway Attestation provide complete doorstep services including document pickup, processing, and delivery.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if documents are not properly attested for UAE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Improper or incomplete attestation may result in visa rejection, job offer cancellation, or legal issues in the UAE.",
                },
              },
            ],
          })}
        </script>
        {/* ------------------------------------------------------------------------------------------------------------ */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.goodwayattestation.com/#localbusiness",
            name: "Goodway Attestation",
            url: "https://www.goodwayattestation.com",
            logo: "https://uaeattestationbangalore.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6174c7ac.png&w=640&q=75",
            image:
              "https://uaeattestationbangalore.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUAE%20Embassy.9725242b.png&w=1080&q=75",
            description:
              "Goodway Attestation is a government-approved attestation agency in Bangalore offering UAE attestation services for educational, personal, and commercial documents with guaranteed delivery.",
            telephone: "+91 9148889666",
            priceRange: "₹5000 - ₹15000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bangalore",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560003",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "12.9716",
              longitude: "77.5946",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "20:30",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Bangalore",
            },
            sameAs: [
              "https://www.facebook.com/goodwayattestation",
              "https://www.instagram.com/goodwayattestation.india/",
              "https://www.linkedin.com/company/goodway-attestation/",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Attestation Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "UAE Attestation in Bangalore",
                    description:
                      "Fast and government-approved UAE attestation service for Indian-issued documents.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "MEA Attestation",
                    description:
                      "Ministry of External Affairs attestation for educational, personal, and commercial certificates.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Embassy & MOFA Attestation",
                    description:
                      "Complete embassy and MOFA attestation services for UAE and other countries.",
                  },
                },
              ],
            },
          })}
        </script>
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
        <PopupForm />
        <Whatsapp />
      </body>
    </html>
  );
}
