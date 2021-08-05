type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};
type TodoProps = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string) => void;
};

export const Row = ({
  todo: { task, isCompleted, id },
  handleDeleteTodo,
  handleCheckTodo
}: TodoProps) => (
  <div 
  className={`flex w-full p-4 mb-2 justify-between items-center
    ${isCompleted ? " bg-gray-400": " bg-green-300"}
  `}
  >
    <p 
    className={
        ` ml-2 text-xl font-sans font-medium
        ${isCompleted ? " text-white line-through" : "text-gray-700"}
        `
    }
    >{task}</p>
    <div 
        className={`
         w-1/6 flex justify-between  items-center mr-2
        `}
    >
      <button aria-label="Delete a todo"
        className=" h-7 w-7 flex justify-center items-center bg-red-400 hover:text-red-600 text-white font-bold rounded"
      onClick={() => handleDeleteTodo(id)}>
        X
      </button>
      <input type="checkbox" 
      className=" form-checkbox  h-7 w-7"
      checked={isCompleted} onChange={() => handleCheckTodo(id)} />
    </div>
  </div>
);
