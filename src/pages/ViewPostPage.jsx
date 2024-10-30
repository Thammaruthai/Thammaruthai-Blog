import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import{ ViewPost} from "../components/ViewPost";

export function ViewPostPage() {
  return (
    <>
      <NavBar />
      <ViewPost />      
      <Footer />
    </>
  );
}
