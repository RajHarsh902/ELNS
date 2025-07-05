import React, {useState} from 'react';
import './AKTU.css';

const pdfFiles = [
  { name: "Reasoning Topics", file: "/documents/Reasoning Topics.pdf" },
  { name: "Group Discussion", file: "/documents/Group Discussion.pdf" },
  { name: "General Interview Questions", file: "/documents/General Interview Questions.pdf" },
  { name: "Excel Questions", file: "/documents/Excel Questions.pdf" }
];

const courseDirectories = [
    {
    "name": "Question Papers",
    "subDirs": [
      {
        "name": "BBA CCS University Question papers",
        "semesters": [
          {
            "name": "Semester 1",
            "subjects": [
              {
                "name": "Organizational Behaviour",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/1ST SEM/2023/bba-1-sem-organizational-behaviour-2023.pdf" }
                ]
              },
              {
                "name": "Environmental Studies",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/1ST SEM/2023/bba-bca-etc-1-sem-environmental-studies.pdf" }
                ]
              },
              {
                "name": "Accounting and Financial Analysis",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/1ST SEM/2023/bba-1-sem-accounting-and-financial-analysis.pdf" }
                ]
              },
              {
                "name": "Business Law",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/1ST SEM/2023/bba-1-sem-business-law-2023.pdf" }
                ]
              },
              {
                "name": "Business Organisation and Ethics",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/1ST SEM/2023/bba-1-sem-business-organisation-and-ethics.pdf" }
                ]
              },
              {
                "name": "Fundamentals of Management",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/1ST SEM/2023/bba-1-sem-fundamentals-of-management.pdf" }
                ]
              },
              {
                "name": "Managerial Economics",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/1ST SEM/2023/bba-1-sem-managerial-economics-2023.pdf" }
                ]
              }
            ]
          },
          {
            "name": "Semester 2",
            "subjects": [
              {
                "name": "Business Communication",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/2ND SEM/2023/bba-2-sem-business-communication-2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/2ND SEM/2024/bba-2-sem-business-communication-18084.pdf" }
                ]
              },
              {
                "name": "Business Environment",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/2ND SEM/2023/bba-2-sem-business-environment-2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/2ND SEM/2024/bba-2-sem-business-environment-18084.pdf" }
                ]
              },
              {
                "name": "Fundamentals of Computer",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/2ND SEM/2023/bba-2-sem-fundamentals-of-computer-2023.pdf" }
                ]
              },
              {
                "name": "Human Resources Management",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/2ND SEM/2023/bba-2-sem-human-resources-management-2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/2ND SEM/2024/bba-2-sem-human-resources-management.pdf" }
                ]
              },
              {
                "name": "Quantitative Techniques",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/2ND SEM/2023/bba-2-sem-quantitative-techniques-for-business-2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/2ND SEM/2024/bba-2-sem-quantitative-techniques-for-business.pdf" }
                ]
              }
            ]
          },
          {
            "name": "Semester 3",
            "subjects": [
              {
                "name": "Advertising Management",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/3RD SEM/2023/bba-3-sem-advertising-management-2023.pdf" }]
              },
              {
                "name": "Company Accounts",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/3RD SEM/2023/bba-3-sem-company-accounts-2023.pdf" }]
              },
              {
                "name": "Customer Relationship Management",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/3RD SEM/2023/bba-3-sem-customer-relationship-management-2023.pdf" }]
              },
              {
                "name": "Income Tax Law and Practices",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/3RD SEM/2023/bba-3-sem-income-tax-law-and-practice-2023.pdf" }]
              },
              {
                "name": "Indian Economy",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/3RD SEM/2023/bba-3-sem-indian-economy_2023.pdf" }]
              },
              {
                "name": "Management Information System",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/3RD SEM/2023/bba-3-sem-management-information-system-2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/3RD SEM/2024/BBA 3rd SEM SEM Management Information.docx" }
                ]
              },
              {
                "name": "Team Building and Leadership",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/3RD SEM/2023/bba-3-sem-team-building-and-leadership-2023.pdf" }]
              }
            ]
          },
          {
            "name": "Semester 4",
            "subjects": [
              {
                "name": "Entrepreneurship and Small Business",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/4TH SEM/2023/bba-4-sem-entrepreneurship-and-small-business-2023.pdf" }]
              },
              {
                "name": "Financial Management",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/4TH SEM/2023/bba-4-sem-financial-management_2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/4TH SEM/2024/bba-4-sem-financial-management-18092.pdf" }
                ]
              },
              {
                "name": "Production and Operation Management",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/4TH SEM/2023/bba-4-sem-production-and-operation-management-2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/4TH SEM/2024/bba-4-sem-production-and-operation-management-18092.pdf" }
                ]
              },
              {
                "name": "Research Methodology",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/4TH SEM/2023/bba-4-sem-research-methodology_2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/4TH SEM/2024/bba-4-sem-research-methodology-18092.pdf" }
                ]
              },
              {
                "name": "Sales and Distribution Management",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/4TH SEM/2023/bba-4-sem-sales-and-distribution-management-2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/4TH SEM/2024/bba-4-sem-sales-and-distribution-management-18092.pdf" }
                ]
              },
              {
                "name": "Consumer Behaviour",
                "pdfs": [{ "name": "2024", "file": "/documents/BBA CCS University Question papers/4TH SEM/2024/bba-4-sem-consumer-behaviour-18092.pdf" }]
              }
            ]
          },
          {
            "name": "Semester 5",
            "subjects": [
              {
                "name": "Aptitude Reasoning",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/5TH SEM/2023/bba-5-sem-aptitude-reasoning-2023.pdf" }]
              },
              {
                "name": "Arithmetic Aptitude",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/5TH SEM/2023/bba-5-sem-arithmetic-aptitude-2023.pdf" }]
              },
              {
                "name": "Corporate Tax (Direct and Indirect)",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/5TH SEM/2023/bba-5-sem-corporate-tax-direct-and-indirect-tax-2023.pdf" }]
              },
              {
                "name": "Cost and Management Accounting",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/5TH SEM/2023/bba-5-sem-cost-and-management-accounting-2023.pdf" }]
              },
              {
                "name": "Financial Institutions and Investment",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/5TH SEM/2023/bba-5-sem-financial-institutions-and-investment-2023.pdf" }]
              },
              {
                "name": "General English",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/5TH SEM/2023/bba-5-sem-general-english-2023.pdf" }]
              },
              {
                "name": "Rural Marketing",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/5TH SEM/2023/bba-5-sem-rural-marketing-2023.pdf" }]
              },
              {
                "name": "Service Marketing",
                "pdfs": [{ "name": "2023", "file": "/documents/BBA CCS University Question papers/5TH SEM/2023/bba-5-sem-service-marketing-2023.pdf" }]
              }
            ]
          },
          {
            "name": "Semester 6",
            "subjects": [
              {
                "name": "Economic and Industrial Law",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/6TH SEM/2023/bba-6-sem-economic-and-industrial-law-2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/6TH SEM/2024/bba-6-sem-economic-and-industrial-law-18111.pdf" }
                ]
              },
              {
                "name": "Operation Research",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/6TH SEM/2023/bba-6-sem-operation-research_2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/6TH SEM/2024/bba-6-sem-operation-research-18107.pdf" }
                ]
              },
              {
                "name": "Retail Management",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/6TH SEM/2023/bba-6-sem-retail-management-2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/6TH SEM/2024/bba-6-sem-retail-management-18110.pdf" }
                ]
              },
              {
                "name": "Strategic Management and Business Policy",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/6TH SEM/2023/bba-6-sem-strategic-management-and-business-policy-2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/6TH SEM/2024/bba-6-sem-strategic-management-and-business-policy-18110.pdf" }
                ]
              },
              {
                "name": "Digital Marketing",
                "pdfs": [
                  { "name": "2023", "file": "/documents/BBA CCS University Question papers/6TH SEM/2023/bba-6-sem-digital-marketing-2023.pdf" },
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/6TH SEM/2024/bba-6-sem-digital-marketing-18111.pdf" }
                ]
              },
              {
                "name": "Fundamental of E-Commerce",
                "pdfs": [
                  { "name": "2024", "file": "/documents/BBA CCS University Question papers/6TH SEM/2024/bba-6-sem-fundamental-of-e-commerce-18111.pdf" }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  {
  name: "Syllabus&Question papers",
  subDirs: [
    {
      name: "MBA Net Syllabus",
      pdfs: [
        { name: "(NIFT) Masters of Business Administration (MBA) Marketing", file: "/documents/Syllabus&Question papers/Question papers/MBA Net Syllabus/MBA_Marketing_Syllabus.pdf" },
        { name: "(NIFT) Masters of Business Administration (MBA) First Year", file: "/documents/Syllabus&Question papers/Question papers/MBA Net Syllabus/MBA_First_Year_Syllabus.pdf" }
      ]
    },
    {
      name: "MBA IEV NIFT Syllabus",
      pdfs: [
        { name: "(NIFT) Masters of Business Administration", file: "/documents/Syllabus&Question papers/Question papers/MBA IEV NIFT Syllabus/MBA_IEV_NIFT_Syllabus.pdf" }
      ]
    },
    {
      name: "MBA Intergrated NIFT Syllabus",
      pdfs: [
        { name: "(NIFT) MBA (Integrated) First Year Syllabus", file: "/documents/Syllabus&Question papers/Question papers/MBA Intergrated NIFT Syllabus/MBA_Integrated_First_Year_Syllabus.pdf" }
      ]
    },
    {
      name: "MBA AKTU Syllabus",
      pdfs: [
        { name: "AKTU UNIVERSITY MBA Common 1st Year", file: "/documents/Syllabus&Question papers/Question papers/MBA AKTU Syllabus/AKTU_MBA_Common_1st_Year.pdf" }
      ]
    },
    {
      name: "BBA NIFT Syllabus",
      pdfs: [
        { name: "(NIFT COLLEGE) Bachelor of Business Administration", file: "/documents/Syllabus&Question papers/Question papers/BBA NIFT Syllabus/BBA_NIFT_Syllabus.pdf" }
      ]
    },

    {
      name: "BBA CCS Syllabus",
      pdfs: [
        { name: "BBASYLLABUS2020onwards", file: "/documents/Syllabus&Question papers/Question papers/BBA CCS Syllabus/BBASYLLABUS2020onwards.pdf" }
      ]
    }
  ]
}
];
const general = (<ul className='pdfList'>
          {pdfFiles.map((pdf, index) => (
            <li key={index} className='pdfItem'>
              <a href={pdf.file} target="_blank" rel="noopener noreferrer" className='pdfLink'>
                {pdf.name} 📂
              </a>
            </li>
          ))}
        </ul>
);

// This component is for displaying AKTU exam resources and preparation materials
// Expandable Directory Component
const Expandable = ({ label, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <div
        className="expandable-label"
        onClick={() => setOpen((o) => !o)}
        
      >
        <span style={{ marginRight: 8 }}>{open ? '▼' : '▶'}</span>
        <span>{label} 📂</span>
      </div>
      {open && <div style={{ marginLeft: 18 }}>{children}</div>}
    </div>
  );
};

const course = (
  <div className="directory">
    {courseDirectories.map((mainDir, mainIdx) => (
      <Expandable key={mainIdx} label={<h2 style={{display:'inline', fontSize:'1.2rem'}}>{mainDir.name}</h2>}>
        <div className="sub-directory-list">
          {mainDir.subDirs.map((subDir, subIdx) => (
            <Expandable key={subIdx} label={<h3 style={{display:'inline', fontSize:'1.05rem'}}>{subDir.name}</h3>}>
              {/* For Question Papers, show semesters and subjects */}
              {mainDir.name === "Question Papers" && subDir.semesters ? (
                subDir.semesters.map((sem, semIdx) => (
                  <Expandable key={semIdx} label={<h4 style={{display:'inline', fontSize:'1rem', fontWeight:500}}>{sem.name}</h4>}>
                    <div className="subject-list">
                      {sem.subjects.map((subject, subjIdx) => (
                        <Expandable key={subjIdx} label={<h5 style={{display:'inline', fontSize:'0.97rem', fontWeight:500}}>{subject.name}</h5>}>
                          <ul className="pdfList">
                            {subject.pdfs.map((pdf, i) => (
                              <li key={i} className="pdfItem">
                                <a href={pdf.file} target="_blank" rel="noopener noreferrer" className="pdfLink">
                                  {pdf.name} 📂
                                </a>
                              </li> 
                            ))}
                          </ul>
                        </Expandable>
                      ))}
                    </div>
                  </Expandable>
                ))
              ) : (
                // For Syllabus and others, show pdfs directly
                <ul className="pdfList">
                  {subDir.pdfs && subDir.pdfs.map((pdf, i) => (
                    <li key={i} className="pdfItem">
                      <a href={pdf.file} target="_blank" rel="noopener noreferrer" className="pdfLink">
                        {pdf.name} 📂
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Expandable>
          ))}
        </div>
      </Expandable>
    ))}
  </div>
);

const AKTU = () => {

  const [generalBool, setGeneralBool] = useState(true);
  const [courseBool, setCourseBool] = useState(false);
  return (
    <div className='examMain'>
        <section className="results-section">
  <h2>Academic Results</h2>
  <ul>
    <li>
      <a href="https://erp.aktu.ac.in/webpages/oneview/oneview.aspx?AspxAutoDetectCookieSupport=1
" target="_blank" rel="noopener noreferrer">
        AKTU Results
      </a>
    </li>
    <li>
      <a href="https://result.ccsuniversity.ac.in/
" target="_blank" rel="noopener noreferrer">
        CCS University Results
      </a>
    </li>
    <li>
      <a href="https://nietcloud.niet.co.in/login.htm;jsessionid=64A6F6ABAB40A372F00D9FE67DFCDC52?failure=true" target="_blank" rel="noopener noreferrer">
        NIET Results
      </a>
    </li>
  </ul>
</section>
      <h2 className='examTitle'>📑 Exam Preparation Resources</h2>
      <div className='examContent'>
        <select onChange={(e) => {
  if (e.target.value === 'general') {
    setGeneralBool(true);
    setCourseBool(false);
  }
  else if (e.target.value === 'course') {
    setCourseBool(true);
    setGeneralBool(false);
  }
}}>
          <option value = 'general'>General Preperation</option>
          <option value = 'course' >Course Preparation</option>
        </select>

        {generalBool && general}
        {courseBool && course}
      </div>
    </div>
  );
};

export default AKTU;
