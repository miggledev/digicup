## Tasks

```js-engine
const tasks = [
    { text: "Describe your task here", done: false, due: "", tags: [] },
    { text: "Add more details", done: false, due: "", tags: [] },
    { text: "Set a due date", done: false, due: "📅 YYYY-MM-DD", tags: [] },
    { text: "Assign tags", done: false, due: "", tags: ["#priority", "#work"] }
];

tasks.map((task, i) => 
    `- [${task.done ? "x" : " "}] Task ${i + 1}: ${task.text}${task.due ? " " + task.due : ""}${task.tags.length ? " " + task.tags.join(" ") : ""}`
).join("\n");
```

---

## Completed

```js-engine
const completedTasks = [
    { text: "Example completed task", done: true }
];

completedTasks.map(task => `- [x] ${task.text}`).join("\n");
```

---

## Tips

- Use `- [ ]` for incomplete tasks and `- [x]` for completed.
- Add tags and dates for better organization.
- Use Obsidian's search to filter by tags or dates.