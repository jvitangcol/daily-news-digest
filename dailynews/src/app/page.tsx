import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">This is header 1</h1>
      <Button variant={"destructive"}>Click me</Button>
      <Button variant={"ghost"}>Click me</Button>
      <Button variant={"link"}>Click me</Button>
      <Button variant={"outline"}>Click me</Button>
      <Button variant={"secondary"}>Click me</Button>
      <Button variant={"default"}>Click me</Button>
    </div>
  );
}
