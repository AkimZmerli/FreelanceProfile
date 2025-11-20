"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Folder,
  FolderOpen,
  FileCode,
  GitBranch,
  ArrowRight,
  Layers,
  LayoutTemplate,
  ShieldCheck,
  Box,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

// --- Types ---

type TreeNodeType = {
  name: string;
  type: "folder" | "file";
  icon?: React.ElementType;
  highlight?: "danger" | "success" | "warning" | "neutral";
  badge?: string;
  children?: TreeNodeType[];
  isOpen?: boolean;
  comment?: string;
};

// --- Data ---

const treeDataBefore: TreeNodeType = {
  name: "src",
  type: "folder",
  children: [
    {
      name: "app",
      type: "folder",
      children: [
        { name: "account-settings", type: "folder", highlight: "danger" },
        { name: "building-form", type: "folder" },
        { name: "chat", type: "folder" },
        { name: "map", type: "folder" },
        { name: "org-selection", type: "folder", highlight: "danger" },
        {
          name: "portfolio", type: "folder",
          children: [
            { name: "page.tsx", type: "file", highlight: "warning", badge: "Monolithic" },
            { name: "components.tsx", type: "file" },
            { name: "utils.ts", type: "file" }
          ]
        },
        {
          name: "property",
          type: "folder",
          children: [
            { name: "page.tsx", type: "file", highlight: "warning", badge: "Monolithic" },
            { name: "layout.tsx", type: "file" },
          ]
        },
        { name: "report", type: "folder" },
        { name: "sign-in", type: "folder", highlight: "danger" },
        { name: "sign-up", type: "folder", highlight: "danger" },
        { name: "sources", type: "folder" },
        { name: "terms", type: "folder" },
        { name: "upload", type: "folder" },
        { name: "user-data", type: "folder" },
        { name: "components", type: "folder", highlight: "warning" },
      ]
    },
    {
      name: "components",
      type: "folder",
      highlight: "warning",
      badge: "Mixed",
      children: [
        { name: "ui", type: "folder" },
        { name: "forms", type: "folder" },
        { name: "shared", type: "folder" },
        { name: "...", type: "file", comment: "60+ files flat" }
      ]
    }
  ]
};

const treeDataAfter: TreeNodeType = {
  name: "src",
  type: "folder",
  children: [
    {
      name: "app",
      type: "folder",
      children: [
        {
          name: "auth",
          type: "folder",
          highlight: "success",
          badge: "Unified",
          icon: ShieldCheck,
          children: [
            { name: "sign-in", type: "folder" },
            { name: "sign-up", type: "folder" },
            { name: "org-selection", type: "folder" }
          ]
        },
        { name: "chat", type: "folder" },
        { name: "map", type: "folder" },
        { name: "portfolio", type: "folder" },
        {
          name: "property",
          type: "folder",
          highlight: "success",
          badge: "(Feature Based)",
          children: [
            { name: "components", type: "folder" },
            { name: "hooks", type: "folder" },
            { name: "types", type: "folder" },
            { name: "utils", type: "folder" }
          ]
        },
        { name: "report", type: "folder" },
      ]
    },
    {
      name: "shared",
      type: "folder",
      highlight: "success",
      icon: Box,
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            { name: "ui", type: "folder" },
            { name: "...", type: "folder", comment: "29 total" }
          ]
        },
        { name: "hooks", type: "folder" },
        { name: "lib", type: "folder" }
      ]
    }
  ]
};

// --- Components ---

const FileIcon = ({ type, icon: Icon, className }: { type: "folder" | "file", icon?: React.ElementType, className?: string }) => {
  if (Icon) return <Icon className={className} />;
  return type === "folder" ? <Folder className={className} /> : <FileCode className={className} />;
};

const TreeNode = ({
  node,
  prefix = "",
  isLast = true,
  isRoot = false
}: {
  node: TreeNodeType;
  prefix?: string;
  isLast?: boolean;
  isRoot?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(node.isOpen ?? true);

  const getHighlightColor = (highlight?: string) => {
    switch (highlight) {
      case "danger": return "text-red-400";
      case "success": return "text-emerald-400";
      case "warning": return "text-amber-400";
      default: return "text-slate-400";
    }
  };

  const currentPrefix = isRoot ? "" : prefix + (isLast ? "└── " : "├── ");
  const childPrefix = isRoot ? "" : prefix + (isLast ? "    " : "│   ");

  return (
    <div className="font-mono text-sm leading-6 whitespace-pre">
      <div
        className={cn(
          "flex items-center group hover:bg-white/5 rounded px-1 -ml-1 cursor-pointer select-none",
          node.highlight === "danger" && "bg-red-500/5",
          node.highlight === "success" && "bg-emerald-500/5"
        )}
        onClick={(e) => {
          e.stopPropagation();
          if (node.children) setIsOpen(!isOpen);
        }}
      >
        <span className="text-slate-600">{currentPrefix}</span>

        <span className={cn("mr-2 opacity-70", getHighlightColor(node.highlight))}>
          {node.children ? (
            isOpen ? <FolderOpen size={14} /> : <Folder size={14} />
          ) : (
            <FileIcon type={node.type} icon={node.icon} className="w-3.5 h-3.5" />
          )}
        </span>

        <span className={cn("font-medium", getHighlightColor(node.highlight))}>
          {node.name}
        </span>

        {node.badge && (
          <span className={cn(
            "ml-2 text-[10px] px-1.5 py-0.5 rounded border uppercase tracking-wider opacity-80",
            node.highlight === "success" ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300" :
              node.highlight === "danger" ? "border-red-500/30 text-red-300" :
                node.highlight === "warning" ? "border-amber-500/30 text-amber-300" :
                  "border-slate-700 text-slate-400"
          )}>
            {node.badge}
          </span>
        )}

        {node.comment && (
          <span className="ml-2 text-slate-600 italic text-xs">
            {`// ${node.comment}`}
          </span>
        )}
      </div>

      {isOpen && node.children && (
        <div>
          {node.children.map((child, i) => (
            <TreeNode
              key={`${child.name}-${i}`}
              node={child}
              prefix={childPrefix}
              isLast={i === node.children!.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeStructureSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;

      setSliderValue(percentage);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full py-8">
      <Card className="overflow-hidden border-slate-800 bg-slate-950/50 backdrop-blur-xl shadow-2xl ring-1 ring-white/10">
        <CardHeader className="border-b border-white/5 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
                <GitBranch className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <CardTitle className="text-lg font-medium text-slate-200">
                  Architecture Evolution
                </CardTitle>
                <p className="text-xs text-slate-500 mt-1 font-mono">
                  src/app structure transformation
                </p>
              </div>
            </div>
            <Badge variant="outline" className="bg-indigo-500/10 text-indigo-300 border-indigo-500/20 animate-pulse">
              Interactive
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-0 relative min-h-[600px]" ref={containerRef}>
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

          <div className="relative flex h-[600px]">
            {/* BEFORE PANE */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950/80"
              style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
            >
              <div className="h-full p-6 overflow-y-auto custom-scrollbar">
                <div className="flex items-center gap-2 mb-6 text-red-400/80 sticky top-0 bg-slate-950/80 backdrop-blur-sm py-2 z-10 border-b border-red-500/10">
                  <LayoutTemplate size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Before: Scattered</span>
                </div>
                <div className="pl-2">
                  <TreeNode node={treeDataBefore} isRoot={true} />
                </div>
              </div>

              {/* Overlay Gradient for depth */}
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
            </div>

            {/* AFTER PANE */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900/30"
              style={{ clipPath: `inset(0 0 0 ${sliderValue}%)` }}
            >
              <div className="h-full p-6 overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-end gap-2 mb-6 text-emerald-400/80 sticky top-0 bg-slate-900/80 backdrop-blur-sm py-2 z-10 border-b border-emerald-500/10">
                  <span className="text-xs font-bold uppercase tracking-widest">After: Vertical Slices</span>
                  <Layers size={16} />
                </div>
                <div className="pl-2">
                  <TreeNode node={treeDataAfter} isRoot={true} />
                </div>
              </div>

              {/* Overlay Gradient for depth */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
            </div>

            {/* SLIDER HANDLE */}
            <div
              className="absolute inset-y-0 w-1 bg-indigo-500/50 cursor-ew-resize hover:bg-indigo-400 active:bg-indigo-400 transition-colors z-20 group"
              style={{ left: `${sliderValue}%` }}
              onMouseDown={handleMouseDown}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center border-2 border-white/20 group-hover:scale-110 transition-transform">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-3 bg-white/40 rounded-full" />
                  <div className="w-0.5 h-3 bg-white/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        {/* Footer / Legend */}
        <div className="bg-slate-950/50 border-t border-white/5 p-4 flex justify-between items-center text-xs text-slate-500">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <span>Legacy Structure</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
              <span>Vertical Slices</span>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <span>Drag to compare</span>
            <ArrowRight size={12} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TreeStructureSlider;