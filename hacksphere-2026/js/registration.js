<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تسجيل الفريق - HackSphere 2026</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/components.css">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body class="dark-theme">
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logos">
                <img src="assets/logos/icb-logo.png" alt="ICB School" class="nav-logo">
                <span class="logo-separator">×</span>
                <img src="assets/logos/dfteam-logo.png" alt="DFTeam-EG" class="nav-logo">
            </div>
            <div class="nav-menu">
                <a href="index.html" class="nav-link">الرئيسية</a>
                <a href="structure.html" class="nav-link">تفاصيل المسابقة</a>
                <a href="leaderboard.html" class="nav-link">المتقدمون</a>
            </div>
            <div class="nav-buttons">
                <a href="dashboard.html" class="btn-secondary">دخول</a>
            </div>
        </div>
    </nav>

    <!-- Registration Form -->
    <section class="registration-section">
        <div class="container">
            <h1 class="gradient-text" style="text-align: center; margin-bottom: 2rem;">تسجيل فريق جديد</h1>
            
            <form id="registrationForm" class="registration-form glass-card" style="max-width: 600px; margin: 0 auto;">
                <div class="form-group">
                    <label for="teamName">اسم الفريق</label>
                    <input type="text" id="teamName" name="teamName" required class="form-control">
                </div>

                <div class="form-group">
                    <label for="leaderName">اسم قائد الفريق</label>
                    <input type="text" id="leaderName" name="leaderName" required class="form-control">
                </div>

                <div class="form-group">
                    <label for="school">المدرسة</label>
                    <input type="text" id="school" name="school" required class="form-control">
                </div>

                <div class="form-group">
                    <label for="email">البريد الإلكتروني</label>
                    <input type="email" id="email" name="email" required class="form-control">
                </div>

                <div class="form-group">
                    <label for="phone">رقم الهاتف</label>
                    <input type="tel" id="phone" name="phone" required class="form-control">
                </div>

                <div class="form-group">
                    <label>عدد أعضاء الفريق (3-5)</label>
                    <select id="memberCount" class="form-control">
                        <option value="3">3 أعضاء</option>
                        <option value="4">4 أعضاء</option>
                        <option value="5">5 أعضاء</option>
                    </select>
                </div>

                <button type="submit" class="btn-primary btn-block">تسجيل الفريق</button>
            </form>
        </div>
    </section>

    <!-- Success Modal -->
    <div id="successModal" class="modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); align-items: center; justify-content: center;">
        <div class="modal-content glass-card" style="max-width: 400px; text-align: center;">
            <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--success-color); margin-bottom: 1rem;"></i>
            <h2>تم التسجيل بنجاح!</h2>
            <p>تم إرسال تأكيد إلى بريدك الإلكتروني</p>
            <a href="dashboard.html" class="btn-primary">الذهاب للوحة التحكم</a>
        </div>
    </div>

    <script src="js/main.js"></script>
    <script>
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Save to localStorage
            const teamData = {
                teamName: document.getElementById('teamName').value,
                leaderName: document.getElementById('leaderName').value,
                school: document.getElementById('school').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                memberCount: document.getElementById('memberCount').value
            };
            
            localStorage.setItem('registeredTeam', JSON.stringify(teamData));
            
            // Show modal
            document.getElementById('successModal').style.display = 'flex';
        });
    </script>
</body>
</html>