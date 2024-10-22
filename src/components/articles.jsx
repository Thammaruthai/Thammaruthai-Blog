import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import * as React from "react";
import { blogPosts } from "../data/blogPosts";
import authorImage from "../img/profilePic.jpg";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ArticlesSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];

  return (
    <>
      <div className="flex flex-row w-full bg-[background: #EFEEEB;] justify-center h-16 items-center">
        <div className="w-11/12">
          <div className="font-semibold text-2xl">Latest articles</div>
        </div>
      </div>

      <div className="flex flex-row w-full bg-[background: #EFEEEB;] justify-center h-16">
        <div className="flex flex-row justify-between bg-[#EFEEEB] w-11/12 h-20 items-center min-sm:rounded-2xl px-4 max-sm:w-full max-sm:flex-col items-center max-sm:py-16 max-sm:justify-center max-sm:gap-2">
          <div id="tab" className="max-sm:hidden">
            <Tabs defaultValue="Highlight" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-4 rounded-md bg-[#EFEEEB]">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="rounded-sm data-[state=active]:bg-[#DAD6D1] data-[state=active]:text-[#43403B]"
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
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div id="selectMenu" className="sm:hidden w-full text-[#75716B]">
            <div className="text-base">Category</div>
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Highlight" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
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
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index} 
                image={post.image}
                category={post.category}
                title={post.title}
                description={post.description}
                author={post.author}
                date={post.date}
              />
            ))}
          </article>
        </div>
      </div>
    </>
  );
}

function BlogCard({ image, category, title, description, author, date }) {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt={title}
        />
      </a>

      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {category}
          </span>
        </div>

        <a href="#">
          <h2 className="font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </a>

        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={authorImage}
            alt={author}
          />
          <span>{author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
