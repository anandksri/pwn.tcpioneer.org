"use client";

import { FormEvent, useState } from "react";

type Difficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

type Lesson = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  sortOrder: number;
  published: boolean;
};

type Module = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  sortOrder: number;
  published: boolean;
  lessons: Lesson[];
};

type ModuleForm = {
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: Difficulty;
  estimatedMinutes: string;
  sortOrder: string;
};

type LessonForm = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  sortOrder: string;
};

const emptyModule: ModuleForm = {
  slug: "",
  title: "",
  description: "",
  category: "",
  difficulty: "BEGINNER",
  estimatedMinutes: "30",
  sortOrder: "0",
};

const emptyLesson: LessonForm = {
  slug: "",
  title: "",
  summary: "",
  content: "",
  sortOrder: "0",
};

function moduleToForm(module: Module): ModuleForm {
  return {
    slug: module.slug,
    title: module.title,
    description: module.description,
    category: module.category,
    difficulty: module.difficulty,
    estimatedMinutes: String(module.estimatedMinutes),
    sortOrder: String(module.sortOrder),
  };
}

function lessonToForm(lesson: Lesson): LessonForm {
  return {
    slug: lesson.slug,
    title: lesson.title,
    summary: lesson.summary,
    content: lesson.content,
    sortOrder: String(lesson.sortOrder),
  };
}

export default function AdminContentManager({ initialModules }: { initialModules: Module[] }) {
  const [modules, setModules] = useState(initialModules);
  const [selectedModuleId, setSelectedModuleId] = useState(initialModules[0]?.id ?? "");
  const [moduleForm, setModuleForm] = useState(emptyModule);
  const [lessonForm, setLessonForm] = useState(emptyLesson);
  const [editingModuleId, setEditingModuleId] = useState<string | null>(null);
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  const selectedModule = modules.find((module) => module.id === selectedModuleId) ?? null;

  function selectModule(module: Module) {
    setSelectedModuleId(module.id);
    setEditingLessonId(null);
    setLessonForm(emptyLesson);
  }

  async function refreshModules() {
    const response = await fetch("/api/admin/modules");
    const result = (await response.json()) as { modules?: Module[]; message?: string };
    if (!response.ok) throw new Error(result.message ?? "Unable to load modules.");
    setModules(result.modules ?? []);
  }

  async function saveModule(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");
    const body = {
      ...moduleForm,
      estimatedMinutes: Number(moduleForm.estimatedMinutes),
      sortOrder: Number(moduleForm.sortOrder),
    };

    try {
      const response = await fetch(
        editingModuleId ? `/api/admin/modules/${editingModuleId}` : "/api/admin/modules",
        {
          method: editingModuleId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingModuleId ? body : { ...body, published: false }),
        },
      );
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to save module.");
      setMessage(editingModuleId ? "Module updated." : "Module draft created.");
      setEditingModuleId(null);
      setModuleForm(emptyModule);
      await refreshModules();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to save module.");
    } finally {
      setPending(false);
    }
  }

  async function saveLesson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedModule) return;
    setPending(true);
    setMessage("");
    const body = { ...lessonForm, sortOrder: Number(lessonForm.sortOrder) };

    try {
      const response = await fetch(
        editingLessonId
          ? `/api/admin/lessons/${editingLessonId}`
          : `/api/admin/modules/${selectedModule.id}/lessons`,
        {
          method: editingLessonId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingLessonId ? body : { ...body, published: false }),
        },
      );
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to save lesson.");
      setMessage(editingLessonId ? "Lesson updated." : "Lesson draft created.");
      setEditingLessonId(null);
      setLessonForm(emptyLesson);
      await refreshModules();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to save lesson.");
    } finally {
      setPending(false);
    }
  }

  async function togglePublished(type: "module" | "lesson", id: string, published: boolean) {
    setPending(true);
    setMessage("");
    try {
      const response = await fetch(
        type === "module" ? `/api/admin/modules/${id}` : `/api/admin/lessons/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ published: !published }),
        },
      );
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to update publishing state.");
      await refreshModules();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to update publishing state.");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs tracking-[0.2em] text-brand-soft uppercase">Admin console</p>
        <h1 className="mt-4 text-4xl font-bold">Learning content</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Build curriculum as drafts, preview it locally, then publish modules and lessons independently.
        </p>

        {message ? <p className="mt-6 border border-primary/20 bg-primary/5 p-4 text-sm text-brand-soft">{message}</p> : null}

        <div className="mt-8 grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
          <section className="space-y-6">
            <form onSubmit={saveModule} className="border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">{editingModuleId ? "Edit module" : "New module"}</h2>
                {editingModuleId ? <button type="button" onClick={() => { setEditingModuleId(null); setModuleForm(emptyModule); }} className="text-xs text-muted-foreground hover:text-foreground">Cancel</button> : null}
              </div>
              <div className="mt-5 space-y-4">
                {([
                  ["slug", "Slug", "web-security"],
                  ["title", "Title", "Web Security"],
                  ["category", "Category", "Web Security"],
                  ["estimatedMinutes", "Estimated minutes", "60"],
                  ["sortOrder", "Sort order", "1"],
                ] as const).map(([name, label, placeholder]) => (
                  <label key={name} className="block text-sm text-muted-foreground">
                    {label}
                    <input required value={moduleForm[name]} type={name.includes("Minutes") || name === "sortOrder" ? "number" : "text"} placeholder={placeholder} onChange={(event) => setModuleForm({ ...moduleForm, [name]: event.target.value })} className="mt-2 h-10 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary" />
                  </label>
                ))}
                <label className="block text-sm text-muted-foreground">Difficulty
                  <select value={moduleForm.difficulty} onChange={(event) => setModuleForm({ ...moduleForm, difficulty: event.target.value as Difficulty })} className="mt-2 h-10 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary"><option value="BEGINNER">Beginner</option><option value="INTERMEDIATE">Intermediate</option><option value="ADVANCED">Advanced</option></select>
                </label>
                <label className="block text-sm text-muted-foreground">Description
                  <textarea required value={moduleForm.description} onChange={(event) => setModuleForm({ ...moduleForm, description: event.target.value })} className="mt-2 min-h-24 w-full border border-border bg-background p-3 text-foreground outline-none focus:border-primary" />
                </label>
                <button disabled={pending} className="h-10 w-full bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:opacity-50">{editingModuleId ? "Save module" : "Create module draft"}</button>
              </div>
            </form>

            <div className="border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-4"><h2 className="text-xl font-semibold">Modules</h2><span className="text-sm text-muted-foreground">{modules.length}</span></div>
              <div className="mt-5 space-y-3">
                {modules.map((module) => (
                  <div key={module.id} className={`border p-4 ${selectedModuleId === module.id ? "border-primary/50 bg-primary/5" : "border-border bg-secondary"}`}>
                    <button type="button" onClick={() => selectModule(module)} className="w-full text-left">
                      <div className="flex items-start justify-between gap-3"><span className="font-medium text-foreground">{module.title}</span><span className="text-xs text-muted-foreground">{module.published ? "Published" : "Draft"}</span></div>
                      <p className="mt-1 text-xs text-muted-foreground">{module.category} · {module.lessons.length} lessons · order {module.sortOrder}</p>
                    </button>
                    <div className="mt-3 flex gap-3 text-xs"><button type="button" onClick={() => { setEditingModuleId(module.id); setModuleForm(moduleToForm(module)); }} className="text-brand-soft hover:text-primary">Edit</button><button type="button" disabled={pending} onClick={() => togglePublished("module", module.id, module.published)} className="text-muted-foreground hover:text-foreground">{module.published ? "Unpublish" : "Publish"}</button></div>
                  </div>
                ))}
                {!modules.length ? <p className="py-6 text-center text-sm text-muted-foreground">No modules created yet.</p> : null}
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <form onSubmit={saveLesson} className="border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-4"><div><h2 className="text-xl font-semibold">{editingLessonId ? "Edit lesson" : "New lesson"}</h2><p className="mt-1 text-sm text-muted-foreground">{selectedModule ? `For ${selectedModule.title}` : "Select a module first"}</p></div>{editingLessonId ? <button type="button" onClick={() => { setEditingLessonId(null); setLessonForm(emptyLesson); }} className="text-xs text-muted-foreground hover:text-foreground">Cancel</button> : null}</div>
              {selectedModule ? <div className="mt-5 space-y-4">
                {([
                  ["slug", "Slug", "introduction"],
                  ["title", "Title", "Introduction"],
                  ["sortOrder", "Sort order", "1"],
                ] as const).map(([name, label, placeholder]) => <label key={name} className="block text-sm text-muted-foreground">{label}<input required value={lessonForm[name]} type={name === "sortOrder" ? "number" : "text"} placeholder={placeholder} onChange={(event) => setLessonForm({ ...lessonForm, [name]: event.target.value })} className="mt-2 h-10 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary" /></label>)}
                <label className="block text-sm text-muted-foreground">Summary<textarea required value={lessonForm.summary} onChange={(event) => setLessonForm({ ...lessonForm, summary: event.target.value })} className="mt-2 min-h-20 w-full border border-border bg-background p-3 text-foreground outline-none focus:border-primary" /></label>
                <label className="block text-sm text-muted-foreground">Content<textarea required value={lessonForm.content} onChange={(event) => setLessonForm({ ...lessonForm, content: event.target.value })} className="mt-2 min-h-48 w-full border border-border bg-background p-3 font-mono text-sm text-foreground outline-none focus:border-primary" /></label>
                <div className="border border-dashed border-border bg-secondary p-4"><p className="text-xs font-semibold tracking-[0.15em] text-brand-soft uppercase">Preview</p><h3 className="mt-2 font-semibold text-foreground">{lessonForm.title || "Lesson title preview"}</h3><p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-muted-foreground">{lessonForm.content || "Lesson content preview will appear here."}</p></div>
                <button disabled={pending} className="h-10 w-full bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:opacity-50">{editingLessonId ? "Save lesson" : "Create lesson draft"}</button>
              </div> : <div className="mt-6 border border-dashed border-border bg-secondary p-8 text-center text-sm text-muted-foreground">Select a module to create or edit its lessons.</div>}
            </form>

            <div className="border border-border bg-card p-6"><h2 className="text-xl font-semibold">Lessons</h2>{selectedModule ? <div className="mt-5 space-y-3">{selectedModule.lessons.map((lesson) => <div key={lesson.id} className="flex items-center justify-between gap-4 border border-border bg-secondary p-4"><div className="min-w-0"><p className="truncate font-medium text-foreground">{lesson.sortOrder}. {lesson.title}</p><p className="mt-1 text-xs text-muted-foreground">{lesson.published ? "Published" : "Draft"}</p></div><div className="flex shrink-0 gap-3 text-xs"><button type="button" onClick={() => { setEditingLessonId(lesson.id); setLessonForm(lessonToForm(lesson)); }} className="text-brand-soft hover:text-primary">Edit</button><button type="button" disabled={pending} onClick={() => togglePublished("lesson", lesson.id, lesson.published)} className="text-muted-foreground hover:text-foreground">{lesson.published ? "Unpublish" : "Publish"}</button></div></div>)}{!selectedModule.lessons.length ? <p className="py-6 text-center text-sm text-muted-foreground">No lessons in this module yet.</p> : null}</div> : <p className="mt-5 text-sm text-muted-foreground">Select a module to view lessons.</p>}</div>
          </section>
        </div>
      </div>
    </main>
  );
}
