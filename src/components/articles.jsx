import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

import { BlogCard } from "./articlesBlogCard";

export function ArticlesSection() {
  const API_BASE_URL = "https://blog-post-project-api.vercel.app";
  const categories = ["Highlight", "Cat", "Inspiration", "General"];

  const [selectCategory, setSelectCategory] = useState(categories[0]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(`${API_BASE_URL}/posts`, {
        params: {
          page,
          limit,
          category: selectCategory === "Highlight" ? undefined : selectCategory,
          keyword: searchKeyword || undefined,
        },
      });

      const formattedPosts = result.data.posts.map((post) => ({
        ...post,
        date: new Date(post.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      }));

      setPosts((prevPosts) => [...prevPosts, ...formattedPosts]);
      setTotalPages(result.data.totalPages);
    } catch (error) {
      console.error("Error fetching post data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
    setPosts([]);
    setPage(1);
  };

  const handleViewMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page, selectCategory, searchKeyword]);

  return (
    <>
      <div className="flex flex-row w-full bg-[background: #EFEEEB;] justify-center h-16 items-center">
        <div className="w-11/12">
          <div className="font-semibold text-2xl">Latest articles</div>
        </div>
      </div>

      <div className="flex flex-row w-full bg-[background: #EFEEEB;] justify-center h-16">
        <div className="flex flex-row justify-between bg-[#EFEEEB] w-11/12 h-20 items-center sm:rounded-2xl px-4 max-sm:w-full max-sm:flex-col items-center max-sm:py-16 max-sm:justify-center max-sm:gap-2">
          <div id="tab" className="max-sm:hidden">
            <Tabs defaultValue={selectCategory} className="w-[400px]">
              <TabsList className="grid w-full grid-cols-4 rounded-md bg-[#EFEEEB]">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="rounded-sm data-[state=active]:bg-[#DAD6D1] data-[state=active]:text-[#43403B] hover:bg-gray-100  transition-colors"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="relative w-80 max-sm:w-full">
            <Input
              type="text"
              placeholder="Search"
              className="pr-10 bg-white text-[#DAD6D1]"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div id="selectMenu" className="sm:hidden w-full text-[#75716B]">
            <div className="text-base">Category</div>
            <Select onValueChange={(value) => handleCategoryChange(value)}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder={selectCategory} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className="hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center sm:mt-16 max-sm:mt-20">
        <div className="w-11/12">
          <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
            {posts.map((post, index) => (
              <BlogCard
                key={index}
                image={post.image}
                category={post.category}
                title={post.title}
                description={post.description}
                author={post.author}
                date={post.date}
                EnableCat={selectCategory}
              />
            ))}
          </article>

          <div className="flex justify-center mt-8">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              page < totalPages && (
                <button
                  onClick={handleViewMore}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  View More
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
