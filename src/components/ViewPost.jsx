// นำเข้า dependencies ต่างๆ เช่น useEffect, useState จาก React และ ReactMarkdown สำหรับแสดง markdown content
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Facebook, // Icon สำหรับแชร์ไปยัง Facebook
  Linkedin, // Icon สำหรับแชร์ไปยัง LinkedIn
  Twitter, // Icon สำหรับแชร์ไปยัง Twitter
  SmilePlus, // Icon สำหรับแสดงจำนวนไลก์
  Copy, // Icon สำหรับคัดลอกลิงก์โพสต์
  Loader2, // Icon สำหรับแสดงตอนโหลดข้อมูล
} from "lucide-react";
import authorImage from "../img/profilePic.jpg"; // รูปภาพของผู้เขียน
import axios from "axios"; // ใช้ axios เพื่อดึงข้อมูลจาก API
import { useParams } from "react-router-dom"; // ใช้เพื่อดึงพารามิเตอร์จาก URL เช่น postId

// ฟังก์ชันหลักแสดงโพสต์จาก API
export function ViewPost() {
  // State สำหรับจัดเก็บข้อมูลต่างๆ ของโพสต์
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [likes, setLikes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const param = useParams(); // รับ postId จาก URL

  // เรียกใช้ getPost เมื่อ component โหลดขึ้นครั้งแรก
  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ฟังก์ชันดึงข้อมูลโพสต์จาก API ตาม postId ที่ได้จาก URL
  const getPost = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${param.postId}`
      );
      // จัดเก็บข้อมูลจาก API ลงใน state
      setImg(response.data.image);
      setTitle(response.data.title);
      setDate(response.data.date);
      setDescription(response.data.description);
      setCategory(response.data.category);
      setContent(response.data.content);
      setLikes(response.data.likes);
      setIsLoading(false);
    } catch (error) {
      console.log(error); // แสดงข้อผิดพลาดใน console
      setIsLoading(false);
    }
  };

  // แสดงหน้าจอโหลดถ้ากำลังดึงข้อมูลอยู่
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 container md:px-8 pb-20 md:pb-28 md:pt-8 lg:pt-16">
      <div className="space-y-4 md:px-4">
        {/* รูปภาพของโพสต์ */}
        <img
          src={img}
          alt={title}
          className="md:rounded-lg object-cover w-full h-[260px] sm:h-[340px] md:h-[587px]"
        />
      </div>
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="xl:w-3/4 space-y-8">
          <article className="px-4">
            {/* หมวดหมู่และวันที่ของโพสต์ */}
            <div className="flex">
              <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
                {category}
              </span>
              <span className="px-3 py-1 text-sm font-normal text-muted-foreground">
                {new Date(date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-4 mb-10">{description}</p>
            {/* เนื้อหาของโพสต์ แสดงด้วย ReactMarkdown */}
            <div className="markdown">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </article>
          <div className="xl:hidden px-4">
            <AuthorBio /> {/* ข้อมูลผู้เขียน */}
          </div>
          <Share likesAmount={likes} /> {/* ฟังก์ชันแชร์และไลก์ */}
          <Comment /> {/* ส่วนคอมเมนต์ */}
        </div>
        <div className="hidden xl:block xl:w-1/4">
          <div className="sticky top-4">
            <AuthorBio /> {/* ข้อมูลผู้เขียนในส่วน sidebar */}
          </div>
        </div>
      </div>
    </div>
  );
}

// ฟังก์ชันแสดงส่วนแชร์โพสต์
function Share({ likesAmount }) {
  const shareLink = encodeURI(window.location.href); // ลิงก์สำหรับแชร์

  return (
    <div className="md:px-4">
      <div className="bg-[#EFEEEB] py-4 px-4 md:rounded-sm flex flex-col space-y-4 md:gap-16 md:flex-row md:items-center md:space-y-0 md:justify-between mb-10">
        {/* ปุ่มแสดงจำนวนไลก์ */}
        <button className="bg-white flex items-center justify-center space-x-2 px-11 py-3 rounded-full text-foreground border border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors group">
          <SmilePlus className="w-5 h-5 text-foreground group-hover:text-muted-foreground transition-colors" />
          <span className="text-foreground group-hover:text-muted-foreground font-medium transition-colors">
            {likesAmount}
          </span>
        </button>
        <div className="flex items-center space-x-2">
          {/* ปุ่มคัดลอกลิงก์โพสต์ */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(shareLink);
            }}
            className="bg-white flex flex-1 items-center justify-center space-x-2 px-11 py-3 rounded-full text-foreground border border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors group"
          >
            <Copy className="w-5 h-5 text-foreground transition-colors group-hover:text-muted-foreground" />
            <span className="text-foreground font-medium transition-colors group-hover:text-muted-foreground">
              Copy
            </span>
          </button>
          {/* ปุ่มแชร์โพสต์ไปยังโซเชียลมีเดีย */}
          <a
            href={`https://www.facebook.com/share.php?u=${shareLink}`}
            target="_blank"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareLink}`}
            target="_blank"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={`https://www.twitter.com/share?&url=${shareLink}`}
            target="_blank"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ฟังก์ชันแสดงส่วนคอมเมนต์โพสต์
function Comment() {

     const comments = [
       {
         name: "Jacob Lash",
         date: "12 September 2024 at 18:30",
         comment:
           "I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting.",
         image:
           "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBjXqwftGT6YjEcc7Ad-3uYjDG57pDkgcxjnHyG4uxkoeAI6BkuJRIpJdAdXZgblQmDt3V6LSSJYdSA3nFS-YacZfLq8yR3lSpS9byHzZNxd15K9LTSLVxuAXhymBdNvdgyeFPUCPR-Cjk2bBkE~1kTOUGYPQzmVf8MtNyZgN6MCP38mFOP4Ca1zr-PIY5n7r6wD-eKnMhPjAemjVU6E9DXIEKkf7pThpqK1PJWtgKsWTkCu0TUjQ~IYrtcdUuQxB7nY4mjaBmj0uBtQ2Iv5ZMJTPaU2xbgK9BsznP-s~zH5VA7JL59t0MuE5jerosnZACif6NvLhCD6K4VXGnLZdQ__",
       },
       {
         name: "Ahri",
         date: "12 September 2024 at 18:30",
         comment:
           "Such a great read! I've always wondered why my cat slow blinks at me—now I know it's her way of showing trust!",
         image:
           "https://s3-alpha-sig.figma.com/img/1852/f933/5b1d7401994fcd48a9a60538ddbfb196?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WJ3HdeZlxZTw3Qj1DmflgJithNJanTkaq7rAa5qGCfxIqme1DJAfUd0hx1B~~eqNsyR-oEWNc4X96Ctn6yGmFGK6xaK-ESqVl-C7yGJbezbhielNRSoyfm9Jwu-1IqSOWxMerkqa6Ty4o5Yz15aO2iPHL1yGEd5ykTRGi-crcPdFCE1PVz~6QahlerseE3prLFIylTYM1Rzp-hNTYUm7fBAUoFsAFlvmLaeFwdHSXNklwuXiECTE16e1Aada83p90hZUCszeTTri7GYNp3I4fAiHeKt90BH8SHLLJhUEElQy5aFL1SEH~pqzJmwjE7mP-QuhkqdPOo42QFay~sHoCg__",
       },
       {
         name: "Mimi mama",
         date: "12 September 2024 at 18:30",
         comment:
           "This article perfectly captures why cats make such amazing pets. I had no idea their purring could help with healing. Fascinating stuff!",
         image:
           "https://s3-alpha-sig.figma.com/img/da58/2ef3/fc9bda3903c1a2bedb688672ce673327?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIMt7QZMJ3OXXuVGsuRvxa0wWHScJAyek8bNeYR3RhE-4RS0S~pxxdNmY3KZ~leZpSc~bJodoMHv13ZlQg4bHENt2h8nM0-MhUaUqKw0o-ynqfCfP1nDv~td2sfce7v~C-mLUTcijR3PqCxKyIM~MI~j7uU414rw5hL21kgRwQ5EJKKZThrSu5j01xP3vpbewUi1tfw6PVXiKv5GC9t96at9xAErgqIO8ySPpdy-7j4dvXf7Fs8D1HoWJMYct7K4-LMHxVK60YBTQ8dmRIEzAQkxoWNrjGrxCt9~5~lXgVchcB2uk4i26C0a4IUFniJmCLqeyfxNWkAcYDHP4DNVHw__",
       },
     ];

    
  return (
    <div>
     
      {/* แสดงรายการคอมเมนต์ */}
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

// ฟังก์ชันแสดงข้อมูลผู้เขียน
function AuthorBio() {
  return (
    <div>
      <img src={authorImage} alt="Thompson P." />
      <h3>Thompson P.</h3>
    </div>
  );
}

// ฟังก์ชันแสดงหน้าจอโหลดข้อมูล
function LoadingScreen() {
  return (
    <div>
      <Loader2 className="w-16 h-16 animate-spin text-foreground" />
      <p>Loading...</p>
    </div>
  );
}
