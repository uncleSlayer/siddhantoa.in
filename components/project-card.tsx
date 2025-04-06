"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
}

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`rounded-lg overflow-hidden transition-all duration-300 ${
        expanded ? "fixed inset-4 z-50 flex flex-col bg-[#121212] border border-white/10" : "relative bg-white/5"
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-mono mb-2">{title}</h3>
          {expanded && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setExpanded(false)}
              className="h-8 w-8 rounded-full hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <p className="text-white/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-white/10 rounded-md text-xs">
              {tag}
            </span>
          ))}
        </div>
        {expanded ? (
          <div className="flex-1 overflow-auto">
            <div className="space-y-4">
              <h4 className="text-lg font-mono">Project Details</h4>
              <p className="text-white/70">
                This project was developed to solve specific challenges in the industry. It leverages modern
                technologies to provide a robust and scalable solution.
              </p>

              <h4 className="text-lg font-mono">Key Features</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start">
                  <span className="text-[#ff3e3e] mr-2">•</span> Feature one with detailed explanation
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff3e3e] mr-2">•</span> Feature two with performance metrics
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff3e3e] mr-2">•</span> Feature three with technical implementation details
                </li>
              </ul>

              <h4 className="text-lg font-mono">Technologies Used</h4>
              <p className="text-white/70">Detailed explanation of the technology stack and architecture decisions.</p>

              <div className="flex gap-4 mt-6">
                <Button className="bg-[#ff3e3e] hover:bg-[#ff3e3e]/90 text-white">View Demo</Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/10">
                  Source Code
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <Button
            variant="ghost"
            className="p-0 h-auto text-[#ff3e3e] hover:text-[#ff3e3e]/90 hover:bg-transparent"
            onClick={() => setExpanded(true)}
          >
            View details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}

