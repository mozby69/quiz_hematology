// creating an array and passing the number, questions, options, and answers
let questions = [
 
    {
      numb: 1,
      question: "A physician wants to obtain a measure of a patient’s iron stores. Which of the following tests would be the most suitable?",
      answer: "Serum ferritin",
      options: [
        "Serum iron",
        "Serum transferrin (TIBC)",
        "Serum ferritin",
        "Transferrin saturation"
      ]
    },
    {
      numb: 2,
      question: "A 68-year-old woman visited her physician with reports of fatigue and weakness. A CBC was ordered, and the patient’s results were as follows:\nRBC 2.50 x10^12/L\nHgb 6.2 g/dL\nHct 18.8%\nMCV 75.2 fL\nMCH 24.8 pg\nMCHC 33%\nWhich of the following would be a plausible diagnosis for this patient?",
      answer: "Iron-deficiency anemia",
      options: [
        "Iron-deficiency anemia",
        "Vitamin B12 deficiency",
        "Anemia of chronic inflammation",
        "Hemochromatosis"
      ]
    },
    {
      numb: 3,
      question: "A peripheral smear shows a decreased RBC count with microcytic, hypochromic cells with small grape-like inclusions in the RBCs on both Wright stain and Prussian blue stain. This is consistent with:",
      answer: "Sideroblastic anemia",
      options: [
        "Iron-deficiency anemia",
        "Sideroblastic anemia",
        "Pernicious anemia",
        "β-Thalassemia minor"
      ]
    },
    {
      numb: 4,
      question: "Given the following results of iron studies, which disorder is the most likely?\nSerum iron: dec\nFerritin: dec\nTIBC: inc\n% Saturation: dec",
      answer: "Iron-deficiency anemia",
      options: [
        "Iron-deficiency anemia",
        "Sideroblastic anemia",
        "Anemia of chronic inflammation",
        "Hemochromatosis"
      ]
    },
    {
      numb: 5,
      question: "Acquired sideroblastic anemia may be present in all of the following except:",
      answer: "Malabsorption",
      options: [
        "Alcoholism",
        "Lead poisoning",
        "Malabsorption",
        "Myelodysplastic syndromes"
      ]
    },
    {
      numb: 6,
      question: "A patient has a macrocytic anemia, and the physician suspects pernicious anemia. Which test would best rule in a definitive diagnosis of pernicious anemia?",
      answer: "Intrinsic factor antibodies",
      options: [
        "Homocysteine",
        "Intrinsic factor antibodies",
        "Ova and parasite examination for D. latum",
        "Bone marrow examination"
      ]
    },
    {
      numb: 7,
      question: "Megaloblastic anemias result from which of the following?",
      answer: "Deficiencies in Vitamin B12 and folic acid",
      options: [
        "Deficiencies in free erythrocyte protoporphyrin",
        "Deficiencies in Vitamin B12 and folic acid",
        "Increases in iron and hepcidin",
        "Decreases in liver function"
      ]
    },
    {
      numb: 8,
      question: "A patient’s bone marrow showed erythroid hyperplasia with signs of dysplastic maturation, particularly in the RBC precursors. This is consistent with which of the following?",
      answer: "Pernicious anemia",
      options: [
        "Sickle cell anemia",
        "β-Thalassemia major",
        "Pernicious anemia",
        "G6PD deficiency"
      ]
    },
    {
      numb: 9,
      question: "The CBC for a 57-year-old man had the following results. Which tests would be best to order next?\nRBC: 2.5x10^12/L\nHgb: 8.5 g/dl\nHct: 26%\nMCV: 104 fL\nMCH: 34 pg\nMCHC: 33%",
      answer: "Vitamin B12 and folic acid levels",
      options: [
        "Iron studies",
        "Vitamin B12 and folic acid levels",
        "Bone marrow examination",
        "Intrinsic factor antibodies"
      ]
    },
    {
      numb: 10,
      question: "The majority of acquired aplastic anemia cases usually result from which of the following?",
      answer: "Unknown causes",
      options: [
        "Unknown causes",
        "Pregnancy",
        "Chloramphenicol exposure",
        "Radiation exposure"
      ]
    },
    {
      numb: 11,
      question: "Which of the following values is the most likely to be normal in a patient with aplastic anemia?",
      answer: "Absolute lymphocyte count",
      options: [
        "RBC count",
        "Absolute neutrophil count",
        "Absolute lymphocyte count",
        "Platelet count"
      ]
    },
    {
      numb: 12,
      question: "Fanconi’s anemia is an inherited aplastic anemia with mutations that lead to:",
      answer: "Increased chromosome fragility",
      options: [
        "Increased chromosome fragility",
        "Myelophthisic anemia",
        "Pancreatic issues",
        "RBC enzymatic defects"
      ]
    },
    {
      numb: 13,
      question: "Which of the following is decreased in cases of intravascular hemolytic anemia?",
      answer: "Haptoglobin",
      options: [
        "Bilirubin",
        "Urine hemosiderin",
        "Haptoglobin",
        "Plasma hemoglobin"
      ]
    },
    {
      numb: 14,
      question: "Typical CBC findings in hemolytic anemia include:",
      answer: "Macrocytic, normochromic cells with increased polychromasia",
      options: [
        "Microcytic, hypochromic cells with increased poikilocytosis",
        "Macrocytic, normochromic cells with increased polychromasia",
        "Microcytic, normochromic cells with increased poikilocytosis",
        "Macrocytic, hypochromic cells with increased polychromasia"
      ]
    },
    {
      numb: 15,
      question: "Which of the following disorders does not have a hemolytic component?",
      answer: "Anemia of chronic disease",
      options: [
        "Sickle cell anemia",
        "Autoimmune hemolytic anemia",
        "Glucose-6-phosphate dehydrogenase deficiency",
        "Anemia of chronic disease"
      ]
    },
    {
      numb: 16,
      question: "A patient presents with evidence of a hemolytic anemia. Spherocytes, polychromasia, and macrocytosis are observed. Which of the following would best help to distinguish the cause of the anemia?",
      answer: "DAT",
      options: [
        "Osmotic fragility",
        "DAT",
        "G6PD activity assay",
        "Vitamin B12 level"
      ]
    },
    {
      numb: 17,
      question: "Paroxysmal nocturnal hemoglobinuria is characterized by flow cytometry results that are:",
      answer: "Negative for CD55 and CD59",
      options: [
        "Negative for CD55 and CD59",
        "Positive for CD55 and CD59",
        "Negative for CD4 and CD8",
        "Positive for all normal CD markers"
      ]
    },
    {
      numb: 18,
      question: "G6PD deficiency episodes are related to which of the following?",
      answer: "Exposure to oxidant damage",
      options: [
        "Exposure to oxidant damage",
        "Defective globin chains",
        "Antibodies to RBCs",
        "Abnormal protein structures"
      ]
    },
    {
      numb: 19,
      question: "Which of the following disorders is not classified as a microangiopathic hemolytic anemia?",
      answer: "Traumatic cardiac hemolytic anemia",
      options: [
        "Disseminated intravascular coagulation",
        "Hemolytic uremic syndrome",
        "Traumatic cardiac hemolytic anemia",
        "Thrombotic thrombocytopenic purpura"
      ]
    },
    {
      numb: 20,
      question: "A previously healthy 36-year-old woman visited her physician because of a sudden onset of easy bruising and bleeding. Of the following, which is the most likely cause of her laboratory results?\nWBC: 10.5x10^9/L\nHct: 25%\nMCHC: 32%\nRBC: 3x10^12/L\nMCV: 83 fL\nPlatelets: 18x10^9/L\nHgb: 8 g/dl\nMCH: 26 pg\nDifferential: Normal WBCs with moderate schistocytes and polychromasia\nPT: 12.8 seconds\naPTT 34 seconds",
      answer: "Thrombotic thrombocytopenic purpura",
      options: [
        "Sickle cell anemia",
        "Chronic myelogenous leukemia",
        "Disseminated intravascular coagulation",
        "Thrombotic thrombocytopenic purpura"
      ]
    },


      {
        numb: 21,
        question: "Warm autoimmune hemolytic anemia is usually caused by which of the following?",
        answer: "IgG antibodies",
        options: [
          "IgA antibodies",
          "IgG antibodies",
          "IgM antibodies",
          "Complement"
        ]
      },
      {
        numb: 22,
        question: "Which of the following conditions is not associated with secondary warm autoimmune hemolytic anemia?",
        answer: "Idiopathic onset",
        options: [
          "CLL",
          "Idiopathic onset",
          "Rheumatoid arthritis",
          "Viral infections"
        ]
      },
      {
        numb: 23,
        question: "The mutation seen in sickle cell anemia is:",
        answer: "b6Glu-Val",
        options: [
          "b6Glu-Val",
          "b6Glu-Lys",
          "b26Glu-Lys",
          "b63Glu-Arg"
        ]
      },
      {
        numb: 24,
        question: "The majority of hospitalizations associated with sickle cell anemia are due to:",
        answer: "Vasoocclusion",
        options: [
          "Cardiomegaly",
          "Cholelithiasis",
          "Pneumonia",
          "Vasoocclusion"
        ]
      },
      {
        numb: 25,
        question: "Patients with sickle cell trait usually have RBC morphology that includes which of the following?",
        answer: "Normocytic, normochromic RBCs with occasional target cells",
        options: [
          "Normocytic, normochromic RBCs with occasional target cells",
          "Normocytic, normochromic RBCs with rare sickle cells",
          "Hypochromic, microcytic RBCs with moderate target cells",
          "Macrocytic, normochromic cells with occasional NRBCs"
        ]
      },
      {
        numb: 26,
        question: "Which laboratory test is best used for definitive diagnosis of sickle cell anemia?",
        answer: "Hemoglobin electrophoresis",
        options: [
          "Solubility testing",
          "Hemoglobin electrophoresis",
          "Peripheral smear review for sickle cells",
          "Bone marrow analysis"
        ]
      },
      {
        numb: 27,
        question: "A peripheral smear review shows mildly anemic sample with target cells and oblong hexagonal crystalloids. What is a possible identity for the crystalloids?",
        answer: "Hemoglobin C",
        options: [
          "Hemoglobin S",
          "Hemoglobin C",
          "Hemoglobin SC",
          "Hemoglobin E"
        ]
      },
      {
        numb: 28,
        question: "An 18-year-old man has a CBC done when visiting his physician for a persistent sore throat. He has the following results:\nWBC 12.5 x 10^9/L\nHct 30.0%\nMCHC 33%\nRBC 6.00 x 10^12/L\nMCV 60 fL\nPlatelet 218 x 10^9/L\nHgb 10.0 g/dL\nMCH 20 pg\nWhich of the following is most likely?",
        answer: "This patient is likely to have b-thalassemia minor",
        options: [
          "This patient is normal with a slightly elevated WBC count because of his sore throat",
          "This patient has infectious mononucleosis and warm autoimmune hemolytic anemia",
          "This patient is likely to have β-thalassemia minor",
          "There is a specimen quality issue because of a cold agglutinin"
        ]
      },
      {
        numb: 29,
        question: "Hemoglobin H disease is described as:",
        answer: "- -/-a",
        options: [
          "- -/-a",
          "-a/-a",
          "- -/bb",
          "-b/-b"
        ]
      },
      {
        numb: 30,
        question: "A 3-year-old female patient is seen in the hematology clinic to investigate the cause of her persistent anemia. Hemoglobin electrophoresis was ordered, and results showed an elevation in Hgb F, with a small increase in Hgb A2. What is the most likely disorder based on these results?",
        answer: "b-Thalassemia major",
        options: [
          "α-Thalassemia major",
          "β-Thalassemia major",
          "α-Thalassemia minor",
          "Hemoglobin H disease"
        ]
      },
      {
        numb: 31,
        question: "A 36-year-old male patient has a CBC performed as part of a routine work physical. The WBC count was 6.5 x 10^9/L with a differential count of 48% neutrophils, 40% lymphocytes, 8% monocytes, 3% eosinophils, and 1% basophils. The majority of the neutrophils were mature but hyposegmented, showing band-like or single nuclei. What disorder would be suspected?",
        answer: "Pelger-Huet anomaly",
        options: [
          "Alder-Reilly anomaly",
          "Leukocyte adhesion deficiency",
          "Pelger-Huet anomaly",
          "Reed Sternberg syndrome"
        ]
      },
     
      {
        numb: 32,
        question: "A 38-year-old male patient has the following CBC results:\nWBC: 32.5 x 10^9/L\nHct 48.0%\nRBC: 5.50 x 10^12/L\nPlatelet: 2.25 x 10^9/L\nHgb 16.0 g/dL\nDifferential: 49% segmented neutrophils, 9% bands, 25% lymphocytes, 9% monocytes, 1% eosinophils, 4% metamyelocytes, 3% myelocytes; RBC and platelet morphology appear normal\nWhich of the following conditions is the most likely cause of these results?",
        answer: "Bacterial infection",
        options: [
          "Bacterial infection",
          "CML",
          "Refractory anemia",
          "Viral infection"
        ]
      },
      {
        numb: 33,
        question: "Which of the following cytochemical stains is best used to distinguish cells of monocytic origin?",
        answer: "a-Naphthyl acetate esterase",
        options: [
          "a-Naphthyl acetate esterase",
          "Naphthol AS-D chloroacetate esterase",
          "Myeloperoxidase",
          "Periodic acid–Schiff"
        ]
      },
      {
        numb: 34,
        question: "A positive tartrate-resistant acid phosphatase (TRAP) stain is indicative of:",
        answer: "Hairy cell leukemia",
        options: [
          "Burkitt’s lymphoma",
          "Chronic myelogenous leukemia",
          "Hairy cell leukemia",
          "Multiple myeloma"
        ]
      },
      {
        numb: 35,
        question: "Which mutation is shared by a large percentage of patients with polycythemia vera, essential thrombocythemia, and primary myelofibrosis?",
        answer: "JAK2 V617F",
        options: [
          "BCR/ABL",
          "JAK2 V617F",
          "PDGFR",
          "RUNX1"
        ]
      },
      {
        numb: 36,
        question: "A patient has a CBC and peripheral smear with an elevated WBC count and left shift, suggestive of a diagnosis of CML. Which of the following tests would be the most helpful in confirming the suspected diagnosis?",
        answer: "Karyotyping for the Philadelphia chromosome",
        options: [
          "Cytochemical staining for myeloperoxidase and LAP",
          "Karyotyping for the Philadelphia chromosome",
          "Flow cytometry for myeloid cell markers",
          "Lymph node biopsies for metastasis"
        ]
      },
      {
        numb: 37,
        question: "A patient has a splenomegaly, and his CBC shows a left shift; bizarre RBCs, including dacryocytes; and notable platelet abnormalities. Which of the following would be the most helpful in determining the patient’s diagnosis?",
        answer: "Bone marrow biopsy",
        options: [
          "Bone marrow biopsy",
          "LAP staining",
          "Karyotyping for the Philadelphia chromosome",
          "Spleen biopsy"
        ]
      },
      {
        numb: 38,
        question: "Which of the following peripheral blood findings would not be expected in a patient with a myelodysplastic syndrome?",
        answer: "Decreased vitamin B12 and folic acid",
        options: [
          "Hypogranular neutrophils",
          "Binucleate neutrophils and NRBCs",
          "Circulating micromegakaryocytes",
          "Decreased vitamin B12 and folic acid"
        ]
      },
      {
        numb: 39,
        question: "The WHO system classifies this disorder as a Myeloproliferative/Myelodysplastic syndrome.",
        answer: "Chronic Myelomonocytic Leukemia",
        options: [
          "Refractory Anemia with Ringed Sideroblasts",
          "5q Syndrome",
          "Chronic Myelomonocytic Leukemia",
          "Refractory Anemia with Multilineage Dysplasia"
        ]
      },
      {
        numb: 40,
        question: "A 4-year-old male patient presents with a slightly elevated WBC count, and occasional blasts are present on the differential. Flow cytometry is performed with the following results: CD10(+), CD19 (+), CD22(+), CD79a(+), TdT(+). Which of the following diagnoses is the most likely?",
        answer: "Intermediate B-cell ALL",
        options: [
          "Intermediate B-cell ALL",
          "Pre–B-cell ALL",
          "T-cell ALL",
          "Pre–T-cell ALL"
        ]
      },
      {
        numb: 41,
        question: "Which of the following may predict a better prognosis in patients with ALL?",
        answer: "The patient is a child",
        options: [
          "The patient is a child",
          "Peripheral blood blast counts greater than 30 x 10^9/L",
          "The Philadelphia chromosome is present",
          "The patient is hypodiploid"
        ]
      },
      {
        numb: 42,
        question: "A 28-year-old female patient presented to the emergency department with symptoms suggestive of DIC. A CBC and coagulation studies were ordered. The peripheral smear showed blasts and immature cells with heavy granulation and Auer rods. Which of the following disorders would be the most likely?",
        answer: "AML with t(15;17)(q22;q12); PML-RARa",
        options: [
          "AML with t(9;11)(p22;q23); MLLT3-MLL",
          "AML with t(15;17)(q22;q12); PML-RARa",
          "ALL with t(12;21)(p13;q22); ETV6-RUNX1",
          "ALL with t(9;22)(q34;q11.2); BCR-ABL1"
        ]
      },

      // 
 
        {
          numb: 43,
          question: "A patient presents with an elevated WBC count, increased monocytes, and blasts present on the differential. Flow cytometry is performed with the following results: CD4+, CD11b+, CD11c+, CD13+, CD14+, CD33+, CD36+, CD64+. Which of the following diagnoses is the most likely?",
          answer: "Acute myelomonocytic leukemia",
          options: [
            "AML with minimal differentiation",
            "AML with maturation",
            "Acute myelomonocytic leukemia",
            "Acute monoblastic leukemia"
          ]
        },
        {
          numb: 44,
          question: "A 75-year-old male patient visits his physician for an annual checkup. His CBC showed an elevated WBC count with numerous small lymphocytes and smudge cells, and a subsequent bone marrow biopsy and aspirate showed hypercellularity with increased lymphoid cells. What is a presumptive diagnosis based on this information?",
          answer: "Chronic lymphocytic leukemia/small cell lymphocytic lymphoma",
          options: [
            "Acute lymphoblastic leukemia",
            "Chronic lymphocytic leukemia/small cell lymphocytic lymphoma",
            "Hairy cell leukemia",
            "Therapy-related acute myelogenous leukemia"
          ]
        },
        {
          numb: 45,
          question: "Which of the following is not considered a disorder of plasma cells?",
          answer: "Sézary syndrome",
          options: [
            "Monoclonal gammopathy of undetermined significance",
            "Multiple myeloma",
            "Sézary syndrome",
            "Waldenström’s macroglobulinemia"
          ]
        },
        {
          numb: 46,
          question: "Which of the following sets of CD markers are associated with T lymphocytes?",
          answer: "CD2, CD3, CD4",
          options: [
            "CD2, CD3, CD4",
            "CD13, CD14, CD15",
            "CD19, CD20, CD22",
            "CD34, CD71, CD117"
          ]
        },
        {
          numb: 47,
          question: "Bone marrow cellularity is most often estimated by examining which of the following?",
          answer: "Core biopsy",
          options: [
            "Aspirate",
            "Buffy coat",
            "Core biopsy",
            "Crush preparations"
          ]
        },
        {
          numb: 48,
          question: "A dry tap may be seen in bone marrow aspirations in all of the following conditions except:",
          answer: "Multiple myeloma",
          options: [
            "Aplastic anemia",
            "Hairy cell leukemia",
            "Multiple myeloma",
            "Primary myelofibrosis"
          ]
        },
        {
          numb: 49,
          question: "The largest hematopoietic cells present in the bone marrow are:",
          answer: "Megakaryocytes",
          options: [
            "Lymphoblasts",
            "Megakaryocytes",
            "Osteoblasts",
            "Pronormoblasts"
          ]
        },
        {
          numb: 50,
          question: "Hemoglobin A contains which of the following configurations of globin chains?",
          answer: "α2b2",
          options: [
            "α2b2",
            "α2d2",
            "α2g2",
            "α2e2"
          ]
        },
        {
          numb: 51,
          question: "Which of the following locations is not a site of extramedullary hematopoiesis?",
          answer: "Bone marrow",
          options: [
            "Bone marrow",
            "Liver",
            "Spleen",
            "Thymus"
          ]
        },
        {
          numb: 52,
          question: "Patients with renal failure often exhibit compromised hematopoietic activity because of which of the following?",
          answer: "Decreased production of erythropoietin",
          options: [
            "Concurrent depression of thyroid hormones",
            "Decreased production of erythropoietin",
            "Decreased production of GM-CSF",
            "Bone marrow suppression caused by medications"
          ]
        },
        {
          numb: 53,
          question: "Which of the following best describes the function of the Rapoport-Luebering pathway?",
          answer: "It produces 2,3 diphosphoglycerate (2,3 DPG)",
          options: [
            "It produces ATP to help maintain RBC membrane deformability",
            "It results in the reduction of glutathione",
            "It produces 2,3 diphosphoglycerate (2,3 DPG)",
            "It produces cytochrome b reductase"
          ]
        },
        {
          numb: 54,
          question: "A 3-year-old male patient visits the pediatrician for a well-child checkup and routine CBC. He has a total WBC count of 5.0 x 10^9/L, RBC count of 3.8 x 10^12/L, and platelet count of 225 x 10^9/L. The differential showed 25% segmented neutrophils, 62% lymphocytes, 10% monocytes, and 3% eosinophils. This patient is likely:",
          answer: "A normal child",
          options: [
            "A normal child",
            "Suffering from an acute bacterial infection",
            "Immunosuppressed",
            "A patient with leukemia"
          ]
        },
        {
          numb: 55,
          question: "Which of the following cell types exhibit IgE receptors on their surface membranes?",
          answer: "Basophils",
          options: [
            "Basophils",
            "Eosinophils",
            "Band neutrophils",
            "Monocytes"
          ]
        },
    

          {
            numb: 56,
            question: "A 62-year-old female patient’s CBC showed the following results: total WBC count of 14.0 x10^9/L, RBC count of 3.95 x 10^12/L, and platelet count of 245 x 10^9/L. The differential showed 65% segmented neutrophils, 10% bands, 15% lymphocytes, and 10% monocytes. Toxic granulation and Dohle bodies were seen in many of the neutrophils. Which of the following is most likely?",
            answer: "The patient has a bacterial infection",
            options: [
              "The patient had just finished running a half marathon",
              "The patient has a bacterial infection",
              "The patient is normal",
              "The patient has a helminth infection"
            ]
          },
          {
            numb: 57,
            question: "A CBC on a patient with Chediak-Higashi syndrome is expected to exhibit which of the following?",
            answer: "Giant fused granules and lysosomes in WBC cytoplasm",
            options: [
              "Giant platelets and Döhle-like inclusions in the cytoplasm of all granulocytes",
              "Large, darkly staining cytoplasmic granules in all WBCs",
              "Giant fused granules and lysosomes in WBC cytoplasm",
              "Leukocytosis and bilobed eosinophils"
            ]
          },
          {
            numb: 58,
            question: "Patients with infectious mononucleosis often have the following CBC results:",
            answer: "Lymphocytosis, including increased variant/reactive lymphocytes",
            options: [
              "Lymphocytosis, including increased variant/reactive lymphocytes",
              "Lymphocytopenia with numerous small lymphocytes",
              "Neutrophilia, including a predominant shift to the left",
              "Neutropenia with a distinct predominance of toxic granulation"
            ]
          },
          {
            numb: 59,
            question: "Flow cytometry for monitoring a patient with acquired immunodeficiency syndrome should include markers for which of the following?",
            answer: "CD4 and CD8",
            options: [
              "CD30 and CD42",
              "CD4 and CD8",
              "CD34 and CD33",
              "CD21 and CD22"
            ]
          },
          {
            numb: 60,
            question: "Which of the following disorders is classified as a myelodysplastic/myeloproliferative disease?",
            answer: "Atypical chronic myelogenous leukemia",
            options: [
              "Acute promyelocytic leukemia",
              "Chronic lymphocytic leukemia",
              "Atypical chronic myelogenous leukemia",
              "Essential thrombocythemia"
            ]
          },
          {
            numb: 61,
            question: "All of the following cells are derived from CFU-GEMM, common myeloid progenitor cells except:",
            answer: "Lymphocytes",
            options: [
              "Basophils",
              "Lymphocytes",
              "Neutrophils",
              "RBCs"
            ]
          },
          {
            numb: 62,
            question: "A patient’s differential count shows an elevated eosinophil count. This is consistent with which of the following?",
            answer: "Parasitic infection",
            options: [
              "Aplastic anemia",
              "Bacterial infection",
              "Parasitic infection",
              "Viral infection"
            ]
          },
          {
            numb: 63,
            question: "Antibodies are produced by which of the following:",
            answer: "Plasma cells",
            options: [
              "Macrophages",
              "T lymphocytes",
              "Plasma cells",
              "Basophils"
            ]
          },
        
        //


 
          {
            numb: 64,
            question: "The nitroblue tetrazolium reduction test is used to assist in the diagnosis of:",
            answer: "Chronic granulomatous disease (CGD)",
            options: [
              "Leukocyte adhesion disorders (LADs)",
              "Chronic granulomatous disease (CGD)",
              "May-Hegglin anomaly",
              "Pelger-Huet anomaly"
            ]
          },
          {
            numb: 65,
            question: "A newly diagnosed patient has an acute leukemia. Which of the following would initially be the most useful in determining the origin of the blasts seen?",
            answer: "Myeloperoxidase (MPO) and terminal deoxynucleotidyl transferase (TdT)",
            options: [
              "Leukocyte alkaline peroxidase (LAP) and nonspecific esterase (NSE)",
              "Periodic acid–Schiff (PAS) and tartrate-resistant acid phosphatase (TRAP)",
              "Myeloperoxidase (MPO) and terminal deoxynucleotidyl transferase (TdT)",
              "Sudan black B and brilliant cresyl blue"
            ]
          },
          {
            numb: 66,
            question: "Therapy for CML often includes the use of a targeted tyrosine kinase inhibitor, such as:",
            answer: "Imatinib mesylate",
            options: [
              "Imatinib mesylate",
              "All-trans retinoic acid",
              "Ablative chemotherapy",
              "2-CDA/cladribine"
            ]
          },
          {
            numb: 67,
            question: "A 58-year-old female was seen by her physician for increasing fatigue. Her CBC shows the following results: WBC: 15.5 x 10^9/L, Hct: 53.0%, RBC: 5.90 x 10^12/L, Platelet: 425 x 10^9/L, Hgb: 17.5 g/dL. Differential: 55% segmented neutrophils, 3% bands, 30% lymphocytes, 9% monocytes, 1% eosinophils, 2% metamyelocytes; RBC and platelet morphology appear normal. Which of the following conditions is the most likely cause of these results?",
            answer: "Polycythemia vera",
            options: [
              "Chronic myelogenous leukemia",
              "Polycythemia vera",
              "Acute bacterial infection",
              "The patient is normal"
            ]
          },
          {
            numb: 68,
            question: "Polycythemia vera can be differentiated from secondary polycythemia because of polycythemia vera presenting with which of the following?",
            answer: "Decreased erythropoietin levels",
            options: [
              "Elevated hemoglobin results",
              "Decreased erythropoietin levels",
              "Normal to decreased WBC counts",
              "Erythroid hyperplasia in the marrow"
            ]
          },
          {
            numb: 69,
            question: "The genetic mutation associated with CML is:",
            answer: "t(9;22)(q34;q11.2)",
            options: [
              "t (15;17)(q22;q12)",
              "t(11;14)(p15;q11)",
              "t(9;22)(q34;q11.2)",
              "t(8;21)(q22;q22)"
            ]
          },
          {
            numb: 70,
            question: "Which of the following is not classified as a myeloproliferative neoplasm?",
            answer: "Waldenström’s macroglobulinemia",
            options: [
              "Chronic eosinophilic leukemia",
              "Essential thrombocythemia",
              "Mastocytosis",
              "Waldenström’s macroglobulinemia"
            ]
          },
          {
            numb: 71,
            question: "What is the minimum percentage of ringed sideroblasts present in the bone marrow for a diagnosis of refractory anemia with ringed sideroblasts?",
            answer: "15%",
            options: [
              "10%",
              "15%",
              "20%",
              "25%"
            ]
          },
          {
            numb: 72,
            question: "All of the following are considered to be signs of dyserythropoiesis except:",
            answer: "Döhle bodies",
            options: [
              "Multinucleate RBCs",
              "Basophilic stippling",
              "Döhle bodies",
              "Oval macrocytes"
            ]
          },
          {
            numb: 73,
            question: "Features of dysmyelopoiesis and dysmegakaryopoiesis seen on a peripheral smear or bone marrow in cases of myelodysplastic syndromes include all of the following except:",
            answer: "Siderotic granules",
            options: [
              "Pelgeroid neutrophils",
              "Neutrophils showing hypogranulation",
              "Giant abnormal platelets with abnormal granules",
              "Siderotic granules"
            ]
          },
          {
            numb: 74,
            question: "The peripheral blood and bone marrow picture sometimes will look similar in myelodysplastic syndromes and some RBC disorders. Which of the following RBC disorders tends to have a peripheral smear appearance similar to cases of myelodysplastic syndromes?",
            answer: "Megaloblastic anemia",
            options: [
              "Iron deficiency anemia",
              "α-Thalassemia minor",
              "Megaloblastic anemia",
              "Warm autoimmune hemolytic anemia"
            ]
          },
          {
            numb: 75,
            question: "Most of the chromosome abnormalities seen in myelodysplastic syndrome involve which of the following chromosomes?",
            answer: "5,7,8,11,13,20",
            options: [
              "5,7,8,11,13,20",
              "2,3,9,15,16,26",
              "3, 6, 10, 14, 21",
              "1, 4, 15, 17, 21"
            ]
          },
        //



    
          {
            numb: 76,
            question: "Which of the following is not one of the recurrent genetic abnormalities seen in cases of acute myeloid leukemia?",
            answer: "AML with t(1;19)(q23;q13); (E2A/PBX1)",
            options: [
              "AML with t(8;21)(q22;q22); AML1(CBFa)/ETO",
              "AML with t(15;17)(q22;q12); (PML/RARa)",
              "AML with inv(16)/p(13;q22); (CBFb/MYH11)",
              "AML with t(1;19)(q23;q13); (E2A/PBX1)"
            ]
          },
          {
            numb: 77,
            question: "AML with 11q23 (MLL) abnormalities are associated with which cell line?",
            answer: "Monocyte",
            options: [
              "Eosinophil",
              "Erythrocyte",
              "Monocyte",
              "Neutrophil"
            ]
          },
          {
            numb: 78,
            question: "T-cell ALL most commonly affects which of the following?",
            answer: "Teenaged males",
            options: [
              "Infants",
              "Teenaged males",
              "Adult females",
              "Elderly males"
            ]
          },
          {
            numb: 79,
            question: "Which of the following disorders is considered to be classified by WHO as an AML, not otherwise classified?",
            answer: "Acute promyelocytic leukemia",
            options: [
              "Acute erythroid leukemia",
              "Acute megakaryoblastic leukemia",
              "Acute promyelocytic leukemia",
              "AML without maturation"
            ]
          },
          {
            numb: 80,
            question: "A 69-year-old female patient presented with symptoms of fatigue and easy bruising. A CBC was ordered. The peripheral smear showed a large number of blasts, anemia, and thrombocytopenia. A bone marrow examination was performed, revealing hypercellularity and a blast appearance similar to that of the peripheral smear. Flow cytometry revealed cells positive for CD13, CD33, CD34, CD38, CD117, and HLA-DR. Cells were negative for TdT, myeloperoxidase, and nonspecific esterase. Based on this information, which of the following is most likely?",
            answer: "AML with minimal differentiation",
            options: [
              "AML with minimal differentiation",
              "AML without maturation",
              "B-cell ALL without maturation",
              "Acute monoblastic leukemia"
            ]
          },
          {
            numb: 81,
            question: "A 3-year-old female patient was having symptoms of lethargy and bruising and reported pain in her legs. Her mother also mentioned noticing several swollen lymph nodes when bathing the child. The pediatrician ordered a CBC, which had the following results: WBC: 18.5 x 10^12/L, RBC: 3.00 x 10^12/L, Hgb: 9.0 g/dL, Hct: 27%, MCHC: 33%, MCV: 90 fL, Platelet: 58 x 10^9/L, Differential: 80% blastocytes, 6% segmented neutrophils, 8% lymphocytes, 6% monocytes. RBC morphology was normal, and platelets were markedly decreased. What is the most likely reason that the physician ordered a lumbar puncture after receiving the CBC results?",
            answer: "To look for leukemia cells in the spinal fluid",
            options: [
              "To rule out an acute case of meningitis",
              "To look for leukemia cells in the spinal fluid",
              "To rule out infectious mononucleosis",
              "To rule out multiple sclerosis"
            ]
          },
          {
            numb: 82,
            question: "A 78-year-old man was previously diagnosed with chronic lymphocytic leukemia (CLL). Periodic CBCs were ordered, and several months of CBCs maintained an appearance consistent with cases of CLL: WBC: 58.5 x 10^12/L, RBC: 3.90 x 10^12/L, Hgb: 12.0 g/dL, Hct: 36%, MCV: 92 fL, MCH: 30 pg, MCHC: 33%, Platelet: 132 x 10^9/L, Differential: 70% lymphocytes, 8% segmented neutrophils, 2% monocytes, 20% unidentified cells with lymphoid appearance and a prominent nucleolus. Which of the following is most likely?",
            answer: "The patient has developed prolymphocytic leukemia",
            options: [
              "The patient has developed Sézary syndrome",
              "The patient has developed prolymphocytic leukemia",
              "The patient has developed multiple myeloma",
              "The patient now has a concurrent case of CLL and ALL"
            ]
          },
          {
            numb: 83,
            question: "Multiple myeloma exhibits laboratory features except which of the following?",
            answer: "Decreased immunoglobulin",
            options: [
              "Occasional plasma cells in the peripheral blood",
              "Rouleaux",
              "Hypercalcemia",
              "Decreased immunoglobulin"
            ]
          },
          {
            numb: 84,
            question: "The diagnostic cell type seen in Hodgkin lymphoma is:",
            answer: "Reed Sternberg cell",
            options: [
              "Binucleate plasma cell",
              "Reed Sternberg cell",
              "Bence Jones lymphocyte",
              "Burkitt lymphocyte"
            ]
          },
          {
            numb: 85,
            question: "Which of the following appearances describes the types of cells seen in Sézary syndrome?",
            answer: "Lymphocytes with convoluted, cerebriform nuclei",
            options: [
              "Plasma cells containing immunoglobulin deposits",
              "Large circulating micromegakaryocytes",
              "Lymphocytes with convoluted, cerebriform nuclei",
              "Prolymphocytes with prominent azurophilic granules"
            ]
          },

       //
            {
              numb: 86,
              question: "Which of the following best describes the function of the hexose-monophosphate pathway?",
              answer: "It results in the reduction of glutathione",
              options: [
                "It produces ATP to help maintain RBC membrane deformability",
                "It results in the reduction of glutathione",
                "It produces 2,3 diphosphoglycerate (2,3 DPG)",
                "It produces cytochrome b reductase"
              ]
            },
            {
              numb: 87,
              question: "A patient has a reticulocyte count of 3.5%. This shows which of the following?",
              answer: "Bone marrow response in producing more RBCs because of increased need",
              options: [
                "Bone marrow response in producing more RBCs because of increased need",
                "A normal reticulocyte count",
                "Patient transfusion of whole blood",
                "Lack of response to vitamin therapy after a diagnosis of iron-deficiency anemia"
              ]
            },
            {
              numb: 88,
              question: "Which of the following cases does not warrant a bone marrow examination?",
              answer: "Diagnosis of suspected systemic fungal infection",
              options: [
                "Presence of blasts on the peripheral smear",
                "Postchemotherapy assessment for minimal residual disease",
                "Diagnosis of iron-deficiency anemia",
                "Diagnosis of suspected systemic fungal infection"
              ]
            },
            {
              numb: 89,
              question: "A bone marrow sample for a patient with newly diagnosed chronic myelogenous leukemia would often be expected to have an M/E ratio of:",
              answer: "10:1",
              options: [
                "1:1",
                "2:1",
                "1:2",
                "10:1"
              ]
            },
            {
              numb: 90,
              question: "Which of the following is not implicated as a cause of non megaloblastic macrocytic anemia?",
              answer: "Hemochromatosis",
              options: [
                "Alcoholism",
                "Hemochromatosis",
                "Hypothyroidism",
                "Liver disease"
              ]
            },
            {
              numb: 91,
              question: "Which of the following results is consistent with a diagnosis of aplastic anemia?",
              answer: "Hypocellular bone marrow, absolute neutrophil count of 0.5 x 10^9/L, platelet count of 40 x 10^9/L, Hgb 8 g/dL",
              options: [
                "Hypocellular bone marrow, absolute neutrophil count of 0.5 x 10^9/L, platelet count of 40 x 10^9/L, Hgb 8 g/dL",
                "Hypocellular bone marrow, absolute neutrophil count of 2.5 x 10^9/L, platelet count of 75 x 10^9/L, Hgb 10 g/dL",
                "Hypercellular bone marrow, absolute neutrophil count of 1.5 x 10^9/L, platelet count of 100 x 10^9/L, Hgb 14 g/dL",
                "Hypocellular bone marrow, absolute neutrophil count of 0.5 x 10^9/L, platelet count of 90 x 10^9/L, Hgb 11 g/dL"
              ]
            },
            {
              numb: 92,
              question: "The following statement is true of mutations in α-thalassemia compared to those seen in β-thalassemia:",
              answer: "Mutations in α-thalassemia occur as a result of the deletion of one or more globin genes",
              options: [
                "Mutations in α-thalassemia occur as a result of reduced or absent expression of the globin gene",
                "Mutations in α-thalassemia occur as a result of the deletion of one or more globin genes",
                "The α-globin gene is expressed on chromosome 11",
                "The β-globin gene is expressed on chromosome 16"
              ]
            },
            {
              numb: 93,
              question: "A patient’s genotype is α/-α. This patient will have a CBC that shows which of the following?",
              answer: "Increased RBC count with microcytic/hypochromic RBCs",
              options: [
                "Decreased RBC count with numerous target cells",
                "Decreased RBC count with microcytic/hypochromic RBCs",
                "Increased RBC count with normal RBCs",
                "Increased RBC count with microcytic/hypochromic RBCs"
              ]
            },
            {
              numb: 94,
              question: "Patients with sickle cell anemia and β-thalassemia major may not show clinical symptoms until the patient is at least 6 months of age because of which of the following?",
              answer: "The mutations may not manifest clinically at birth because the presence of hemoglobin F decreases",
              options: [
                "The mutations are acquired after the child is born",
                "The mutations are activated by dietary and maternal factors",
                "The mutations may not manifest clinically at birth because the presence of hemoglobin F decreases",
                "The mutations lead to elevations in α genes that compensate for the decreased β gene expression"
              ]
            },
            {
              numb: 95,
              question: "The thymus is a site used as a maturation compartment for:",
              answer: "T cells",
              options: [
                "B cells",
                "T cells",
                "Megakaryocytes",
                "Monocytes"
              ]
            },
            {
              numb: 96,
              question: "A manual hemocytometer count was required to check a patient’s total WBC count. A 1:20 dilution was made and used when the four large “W” squares were counted on both sides of the hemacytometer. A total of 105 cells were counted between the two sides. What was the patient’s total WBC count?",
              answer: "2.6 x 10^9/L",
              options: [
                "0.33 x 10^9/L",
                "2.1 x 10^9/L",
                "2.6 x 10^9/L",
                "5.3 x 10^9/L"
              ]
            },
            {
              numb: 97,
              question: "Hereditary elliptocytosis results from defects in which of the following?",
              answer: "Spectrin",
              options: [
                "Ankyrin",
                "Band 3 protein",
                "Spectrin",
                "Pyruvate"
              ]
            },
            {
              numb: 98,
              question: "Primary neutrophil granules contain:",
              answer: "Acid β-glycerophosphatase, cathespins, defensins, elastase, myeloperoxidase, proteinase-3",
              options: [
                "Acetyltransferase, collagenase, gelatinase, lysozyme, β2-microglobulin",
                "Alkaline phosphatase, cytochrome b558, complement receptor 1, complement 1q receptor, vesicle-associated membrane-2",
                "β2-Microglobulin, collagenase, gelatinase, lactoferrin, neutrophil gelatinase-associated lipocalin",
                "Acid β-glycerophosphatase, cathespins, defensins, elastase, myeloperoxidase, proteinase-3"
              ]
            },
            {
              numb: 99,
              question: "A 36-year-old man visited the emergency department because of alternating episodes of fever and chills that persisted over several days. The patient stated he had not felt well since returning from a mission trip to Africa. The physician ordered a CBC with the following results: WBC: 3.5 x 10^9/L, RBC: 3.80 x 10^12/L, Hgb: 12.0 g/dl, Hct: 36%, MCV: 95 fL, MCH 32 pg, MCHC: 33%, Platelet: 145 x 10^9/L, Differential: Normal WBC distribution, normocytic normochromic RBCs with some inclusions present and several abnormal platelet-like structures shaped like boomerangs. What should be done with this sample next?",
              answer: "Refer the sample to the pathologist for further identification",
              options: [
                "Rerun the sample to make sure it is not clotted",
                "Clean the stainer and make another slide to examine",
                "Refer the sample to the pathologist for further identification",
                "Report the results, because the results are normal"
              ]
            },
            {
              numb: 100,
              question: "Patients with suspected paroxysmal cold hemoglobinuria can be confirmed by performing which of the following?",
              answer: "Donath-Landsteiner test",
              options: [
                "Direct antiglobulin test (DAT)",
                "Donath-Landsteiner test",
                "Osmotic fragility test",
                "G6PD activity assay"
              ]
            }
          
          
        
        
        
  ];
  