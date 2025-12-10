<?php
// --- DATA PENGGUNA (Ubah isi di sini) ---
$data = [
    'name' => 'Reza Aldiansyah, ST, MTI, PMP, PMO-CP',
    'position' => 'Digital Transformation Leader | Passionate About Purposeful Tech |CDO-in-the-Making | PMP & PMO-CP | Human-Centered SystemsThinker',
    'bio' => 'Strategic and people-centered digital transformation leader with 15+ years of multidisciplinary experience across IT, education, nonprofit, and telecom sectors. Adept at aligning business goals with innovative technology solutions to drive efficiency, transparency, and sustainable growth. Recognized for successfully leading cross-functional teams, executing high-stakes projects, and shaping long-term digital strategies.',
    'photo_url' => 'https://res.cloudinary.com/dief37xrg/image/upload/v1765280185/Reza_Photo_2025_ksweu3.png', // Ganti dengan path gambar profil Anda (misal: 'foto_reza.jpg')
    'linkedin_url' => 'https://linkedin.com/in/rezaaldiansyah',
    'email_url' => 'mailto:reza.aldi@gmail.com',
    // --- Data Tambahan untuk CV ---
    'about' => 'Strategic and people-centered digital transformation leader with 15+ years of multidisciplinary experience across IT, education, nonprofit, and telecom sectors. Adept at aligning business goals with innovative technology solutions to drive efficiency, transparency, and sustainable growth. Recognized for successfully leading cross-functional teams, executing high-stakes projects, and shaping long-term digital strategies. Certified PMP and PMO-CP professional with deep commitment to continuous improvement and impact-driven leadership.',
    'achievements' => [
        [
            'title' => 'Project Manager – SymEX 2024, PMI Indonesia Chapter',
            'desc' => 'Directed the 12th International Symposium and Exhibition on Project Management in Malang, attended by 225+ participants and 16 international speakers. Delivered full event lifecycle management from planning to execution.'
        ],
        [
            'title' => 'Head of SISDATA – Al Fatih Pilar Peradaban Foundation',
            'desc' => 'Led end-to-end digital transformation across 34 branches. Designed and deployed a centralized system integrating data of students, staff, and parents, significantly improving operational efficiency.'
        ],
        [
            'title' => 'Coordinator of Media & IT – DIKTI, Al Fatih Pilar Peradaban Foundation',
            'desc' => 'Standardized social media and digital asset operations across four academies. Built systems and teams to enhance digital engagement and content consistency.'
        ],
         [
            'title' => 'Transformation Lead – Asy-Syuraa Batam Foundation',
            'desc' => 'Implementing business and digital process changes that generate recurring profits, enabling the provision of additional annual Islamic holiday allowances, periodic provision of basic necessities, and bonuses for 50+ employees.'
        ],
        [
            'title' => 'Gold Award – Engineering Award for Excellence (2008)',
            'desc' => 'Recognized for successful IPTV pilot project implementation in 6 cities with PCCW and PT Telkom.'
        ],
         [
            'title' => 'Cascade’s Achievers Award (2007)',
            'desc' => 'Honored for exceptional performance and CS Core Network Operations leadership at PCCW.'
        ]
    ],
    'experience' => [
        [
            'role' => 'Chief Business Development Officer',
            'company' => 'Pinara Digital',
            'period' => 'Jan 2022 - Present',
            'desc' => 'Defined company vision and go-to-market strategy for IT and digital marketing consulting. Built strategic partnerships and led acquisition efforts.'
        ],
        [
            'role' => 'IT Project Management Consultant',
            'company' => 'Independent',
            'period' => 'Jun 2015 - Present',
            'desc' => 'Advised SMEs and education institutions on IT transformation and digital revenue strategies. Managed nationwide application and data integration project for 33-branch education network.'
        ],
        [
            'role' => 'Lecturer',
            'company' => 'University of Indonesia',
            'period' => 'Jan 2020 - Dec 2021',
            'desc' => 'Taught courses in Information Technology, E-Commerce, and Fintech. Mentored student teams for global competitions including the Chatbot Challenge.'
        ],
        [
            'role' => 'Chief Technology Officer',
            'company' => 'CariMobil',
            'period' => 'Feb 2021 - Sep 2021',
            'desc' => 'Formulated product technology roadmap and launch strategies. Coordinated with stakeholders and ensured milestone delivery.'
        ],
         [
            'role' => 'Junior Manager – IT Planning & PM Unit',
            'company' => 'BNI Syariah',
            'period' => 'Sep 2015 - Mar 2016',
            'desc' => 'Produced board-level IT progress and KPI reports. Managed projects worth IDR 5 billion and served as acting head of PM Unit.'
        ]
    ],
    'education' => [
         [
            'degree' => 'Magister of Information Technology',
            'school' => 'Universitas Indonesia',
            'year' => '2008 - 2010'
        ],
        [
            'degree' => 'Bachelor of Telecommunication Engineering',
            'school' => 'Sekolah Tinggi Teknologi Telkom',
            'year' => '2001 - 2006'
        ]
    ],
    'skills' => ['Digital Transformation Strategy', 'Enterprise System Integration', 'IT Governance', 'Project Management (PMP)', 'PMO-CP', 'Agile & Waterfall', 'Business Process Optimization', 'Team Leadership', 'Cross-functional Collaboration', 'Change and Stakeholder Management', 'SEO & Digital Asset Management', 'Content Strategy & Management'],
    'languages' => [
        'Bahasa Indonesia: Native',
        'English: Full Professional Proficiency',
        'Arabic: Elementary Proficiency'
    ]
];
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $data['name']; ?> - Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <style>
        /* --- CSS (GAYA TAMPILAN) --- */
        html {
            scroll-behavior: smooth;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            /* Membuat gradasi background dari gelap ke merah terang sesuai gambar */
            background: linear-gradient(180deg, #3a1c24 0%, #d6343a 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-x: hidden;
        }

        /* Container Utama */
        .container {
            width: 100%;
            max-width: 480px; /* Membatasi lebar agar terlihat seperti tampilan mobile/kartu */
            padding: 20px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 1;
        }

        /* Header (Logo BIZUP & Menu) */
        .header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            font-weight: bold;
            letter-spacing: 1px;
        }
        
        .header .logo { font-size: 1.2rem; }
        .header .menu-dots { font-size: 1.5rem; cursor: pointer; }

        /* Foto Profil */
        .profile-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid rgba(255, 255, 255, 0.2);
            margin-bottom: 20px;
            background-color: #fff; /* Placeholder jika gambar tidak ada */
        }

        /* Nama & Jabatan */
        .name {
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 5px;
        }

        .position {
            color: #ffbaba; /* Warna pink kemerahan muda */
            font-size: 0.9rem;
            margin-bottom: 30px;
            font-weight: 400;
        }

        /* Kotak Bio Transparan */
        .bio-box {
            background-color: rgba(60, 20, 30, 0.4); /* Warna gelap transparan */
            padding: 25px;
            border-radius: 15px;
            font-size: 0.75rem;
            line-height: 1.6;
            margin-bottom: 30px;
            width: 100%;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Tombol & Aksi */
        .btn {
            display: block;
            width: 100%;
            padding: 12px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            margin-bottom: 15px;
            font-size: 0.9rem;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
        }

        .btn:hover { opacity: 0.9; transform: translateY(-2px); }

        .btn-gold {
            background-color: #c68e42; /* Warna emas/coklat */
            color: white;
            text-transform: uppercase;
        }

        /* Container untuk tombol sosmed (LinkedIn & Email) */
        .social-row {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 15px; /* Correction: 10xpx -> 15px (matching header/original intent) */
            width: 100%;
        }

        .btn-icon {
            background-color: white;
            color: #000;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            border-radius: 50%; /* Bulat */
        }

        .btn-outline {
            display: block;
            width: 100%; /* Full width lagi untuk View Profile */
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.8);
            color: white;
            margin-top: 5px;
        }
        
        .btn-outline:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        /* Footer Logo */
        .footer-logo {
            margin-top: 20px;
            margin-bottom: 40px;
            padding-top: 10px;
            padding-bottom: 20px;
            font-weight: bold;
            opacity: 0.8;
        }

        /* --- PROFILE DETAIL SECTION --- */
        #profile-detail {
            width: 100%;
            padding-top: 40px;
            padding-bottom: 60px;
            opacity: 0; 
            animation: fadeIn 1s ease-in-out forwards;
            animation-delay: 0.2s; /* Sedikit delay agar user scroll dulu */
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .section-title {
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 20px;
            color: #c68e42; /* Matching Gold */
            border-bottom: 1px solid rgba(198, 142, 66, 0.3);
            display: inline-block;
            padding-bottom: 5px;
        }

        .detail-card {
            background: rgba(0, 0, 0, 0.2);
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            text-align: left;
            border-left: 3px solid #c68e42;
        }

        .detail-card h3 {
            font-size: 1rem;
            margin-bottom: 5px;
        }

        .detail-card .meta {
            font-size: 0.8rem;
            color: #ccc;
            margin-bottom: 10px;
            font-style: italic;
        }

        .detail-card p {
            font-size: 0.85rem;
            line-height: 1.5;
            color: #eee;
        }

        .skills-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
        }

        .skill-badge {
            background: rgba(255,255,255,0.1);
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .arrow-down {
            margin-top: 20px;
            opacity: 0.6;
            animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-10px);}
            60% {transform: translateY(-5px);}
        }

    </style>
</head>
<body>

    <div class="container">
        <div class="header">
            <div class="logo">BIZUP.ID</div>
            <div class="menu-dots">&bull;&bull;&bull;</div>
        </div>

        <img src="<?php echo $data['photo_url']; ?>" alt="Profile Photo" class="profile-img">
        
        <h1 class="name"><?php echo $data['name']; ?></h1>
        <p class="position"><?php echo $data['position']; ?></p>

        <div class="bio-box">
            <?php echo $data['bio']; ?>
        </div>

        <a href="#" class="btn btn-gold">ADD TO CONTACT</a>
        
        <!-- Social Icons Row -->
        <div class="social-row">
            <a href="<?php echo $data['linkedin_url']; ?>" class="btn btn-icon">
                <i class="fab fa-linkedin-in"></i>
            </a>
            
            <a href="<?php echo $data['email_url']; ?>" class="btn btn-icon">
                <i class="fas fa-envelope"></i>
            </a>
        </div>

        <!-- VIEW PROFILE BUTTON -->
        <a href="#profile-detail" class="btn btn-outline">View Profile</a>
        <div class="arrow-down"><i class="fas fa-chevron-down"></i></div>

        <div class="footer-logo">BIZUP.ID</div>

        <!-- PROFILE DETAIL SECTION -->
        <div id="profile-detail">
            
            <h2 class="section-title">About Me</h2>
            <div class="detail-card" style="border-left: none; text-align: center;">
                <p><?php echo $data['about']; ?></p>
            </div>

            <h2 class="section-title">Selected Achievements</h2>
            <?php foreach($data['achievements'] as $ach): ?>
            <div class="detail-card" style="border-left-color: #d6343a;">
                <h3><?php echo $ach['title']; ?></h3>
                <p><?php echo $ach['desc']; ?></p>
            </div>
            <?php endforeach; ?>

            <h2 class="section-title">Professional Experiences</h2>
            <?php foreach($data['experience'] as $exp): ?>
            <div class="detail-card">
                <h3><?php echo $exp['role']; ?></h3>
                <div class="meta"><?php echo $exp['company']; ?> | <?php echo $exp['period']; ?></div>
                <p><?php echo $exp['desc']; ?></p>
            </div>
            <?php endforeach; ?>

            <h2 class="section-title">Education</h2>
            <?php foreach($data['education'] as $edu): ?>
            <div class="detail-card">
                <h3><?php echo $edu['degree']; ?></h3>
                <div class="meta"><?php echo $edu['school']; ?> | <?php echo $edu['year']; ?></div>
            </div>
            <?php endforeach; ?>

            <h2 class="section-title">Skills</h2>
            <div class="skills-container" style="margin-bottom: 30px;">
                <?php foreach($data['skills'] as $skill): ?>
                <span class="skill-badge"><?php echo $skill; ?></span>
                <?php endforeach; ?>
            </div>

            <h2 class="section-title">Languages</h2>
            <div class="skills-container">
                <?php foreach($data['languages'] as $lang): ?>
                <span class="skill-badge" style="border-color: #c68e42; color: #c68e42; font-weight: bold;"><?php echo $lang; ?></span>
                <?php endforeach; ?>
            </div>

            <div style="margin-top: 50px; opacity: 0.5; font-size: 0.8rem;">
                <a href="#" style="color: white; text-decoration: none;">Back to Top <i class="fas fa-arrow-up"></i></a>
            </div>
        </div>

    </div>

</body>
</html>