interface Board {
    columns: Map<TypedColumn, string>
}

type TypedColumn = "todo" | "inprogress" | "done";

interface Column {
    id: TypedColumn;
    todos: Todo[];
}

interface Todo {
    $id: string;
    $createdAt: string;
    title: string;
    status: string;
    image?: string;
}

interface Image {
    bucketId: string;
    filed: string;
}