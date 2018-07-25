export class Task{
    id: number
    name: string
    status: string
}

export type Tasks = Task [];

export const TASKS: Tasks = [
    {
      "id": 1,
      "name": "Do homework",
      "status": "Working"
    },
    {
        "id": 2,
        "name": "Do housework",
        "status": "Working"
      },
      {
        "id": 3,
        "name": "Create new project",
        "status": "Working"
      },
      {
        "id": 4,
        "name": "Find work",
        "status": "Working"
      },
      {
        "id": 5,
        "name": "Complete course of Angular",
        "status": "Working"
      }
]