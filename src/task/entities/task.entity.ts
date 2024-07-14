export class Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in_progress" | "completed";
}
