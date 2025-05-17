
Add reminders in your notes using a special tag, e.g. `#reminder(2024-07-01 09:00)`.

```js-engine
// Reminder System for Obsidian using js-engine

const reminderRegex = /#reminder\(([\d-]+\s[\d:]+)\)/g;
const now = new Date();

let reminders = [];
const lines = dv.current().file.content.split('\n');
lines.forEach((line, idx) => {
    let match;
    while ((match = reminderRegex.exec(line)) !== null) {
        const date = new Date(match[1]);
        if (date > now) {
            reminders.push({ line: idx + 1, date, text: line.trim() });
        }
    }
});

if (reminders.length === 0) {
    dv.paragraph("✅ No upcoming reminders.");
} else {
    dv.table(
        ["Line", "Date", "Reminder"],
        reminders.map(r => [r.line, r.date.toLocaleString(), r.text])
    );
}
```

**Usage:**  
- Add `#reminder(YYYY-MM-DD HH:MM)` anywhere in your note.
- Run the code block to see upcoming reminders.
- Requires the [js-engine](https://github.com/blacksmithgu/obsidian-javascript-engine) plugin.