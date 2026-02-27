type User = {
  id: number;
  name: string;
  email: string;
};

export default async function UsersPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users`,
    { cache: "no-store" }
  );

  const users: User[] = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <ul className="space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="border p-4 rounded-md"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">
              {user.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
