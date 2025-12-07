// Version Switcher System
// نظام التبديل بين النسخ المختلفة من التصميم

class VersionSwitcher {
    constructor() {
        // Map version names to folder names
        this.versionMap = {
            'hybrid': 'v1',
            'invite': 'v2',
            'public': 'v3'
        };

        // Default version
        this.currentVersion = localStorage.getItem('design-version') || 'hybrid';
        this.init();
    }

    getFolderName(versionName) {
        return this.versionMap[versionName] || 'v1';
    }

    init() {
        // تحديث الـ CSS و JS files حسب النسخة الحالية
        this.loadVersion(this.currentVersion);

        // إضافة event listeners للأزرار
        this.attachEventListeners();

        // تحديث UI الأزرار
        this.updateButtonsUI();
    }

    loadVersion(version) {
        // حفظ النسخة الحالية
        localStorage.setItem('design-version', version);
        this.currentVersion = version;

        // تحديث CSS files
        this.updateStylesheets(version);

        // تحديث JS files (إذا لزم الأمر)
        this.updateScripts(version);
    }

    updateStylesheets(version) {
        const stylesheets = document.querySelectorAll('link[data-version-file]');
        const folderName = this.getFolderName(version);

        stylesheets.forEach(link => {
            const fileName = link.getAttribute('data-version-file');
            const newHref = `css/${folderName}/${fileName}`;

            // إنشاء link جديد للتحميل السلس
            const newLink = document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.href = newHref;
            newLink.setAttribute('data-version-file', fileName);

            // استبدال القديم بالجديد
            link.parentNode.replaceChild(newLink, link);
        });
    }

    updateScripts(version) {
        // يمكن استخدامها لتحديث ملفات JS إذا كان هناك اختلافات في السلوك
        const scripts = document.querySelectorAll('script[data-version-file]');
        const folderName = this.getFolderName(version);

        scripts.forEach(script => {
            const fileName = script.getAttribute('data-version-file');
            const newSrc = `js/${folderName}/${fileName}`;

            // إنشاء script جديد
            const newScript = document.createElement('script');
            newScript.src = newSrc;
            newScript.setAttribute('data-version-file', fileName);

            // استبدال القديم بالجديد
            script.parentNode.replaceChild(newScript, script);
        });
    }

    switchToVersion(version) {
        if (version === this.currentVersion) {
            return; // نفس النسخة
        }

        // حفظ النسخة الجديدة
        localStorage.setItem('design-version', version);

        // تحديد الملف المناسب حسب النوع
        const currentPage = window.location.pathname.split('/').pop();

        // إذا كانت الصفحة الحالية campaign-details أو public-campaign أو invite-campaign
        if (currentPage.includes('campaign-details') || currentPage.includes('public-campaign') || currentPage.includes('invite-campaign')) {
            if (version === 'public') {
                // الانتقال لنسخة Public
                window.location.href = 'public-campaign.html';
            } else if (version === 'invite') {
                // الانتقال لنسخة Invite Only
                window.location.href = 'invite-campaign.html';
            } else {
                // الانتقال لنسخة Hybrid
                window.location.href = 'campaign-details.html';
            }
        } else {
            // باقي الصفحات: إعادة تحميل عادي
            window.location.reload();
        }
    }

    attachEventListeners() {
        // الأزرار في الـ switcher UI
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-switch-version]')) {
                const version = e.target.getAttribute('data-switch-version');
                this.switchToVersion(version);
            }
        });
    }

    updateButtonsUI() {
        // تحديث شكل الأزرار حسب النسخة النشطة
        const buttons = document.querySelectorAll('[data-switch-version]');

        buttons.forEach(btn => {
            const version = btn.getAttribute('data-switch-version');

            if (version === this.currentVersion) {
                btn.classList.add('active');
                btn.style.opacity = '1';
                btn.style.fontWeight = '600';
            } else {
                btn.classList.remove('active');
                btn.style.opacity = '0.7';
                btn.style.fontWeight = '400';
            }
        });
    }

    getCurrentVersion() {
        return this.currentVersion;
    }
}

// تهيئة النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    window.versionSwitcher = new VersionSwitcher();

    // عرض النسخة الحالية في الـ console
    console.log(`🎨 Current Design Version: ${window.versionSwitcher.getCurrentVersion()}`);
});
