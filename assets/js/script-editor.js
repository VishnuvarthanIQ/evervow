document.addEventListener('DOMContentLoaded', () => {
    const scriptEditor = document.getElementById('scriptEditorArea');
    const wordCountEl = document.getElementById('wordCount');
    const saveBtn = document.getElementById('saveDraftBtn');
    const exportBtn = document.getElementById('exportScriptBtn');

    if (scriptEditor) {
        // Load draft
        const savedDraft = localStorage.getItem('ceremonyScriptDraft');
        if (savedDraft) {
            scriptEditor.value = savedDraft;
        }

        const updateWordCount = () => {
            const text = scriptEditor.value.trim();
            const count = text ? text.split(/\s+/).length : 0;
            if (wordCountEl) wordCountEl.textContent = count + ' words';
        };

        scriptEditor.addEventListener('input', updateWordCount);
        updateWordCount();

        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                localStorage.setItem('ceremonyScriptDraft', scriptEditor.value);
                alert('Draft saved to local storage!');
            });
        }

        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                const text = scriptEditor.value;
                const blob = new Blob([text], { type: 'text/plain' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'Ceremony_Script.txt';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            });
        }
    }
});
