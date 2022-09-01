// import people from "@/data/peopleNew.json";
const people_new = require("../data/peopleNew.json");
import Datatable from "@/ui/datatable";

export default function Homepage() {
  return (
    <div className="container mx-auto mt-16">
      <Datatable rows={people_new} />
    </div>
  );
}
