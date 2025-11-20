# Git Tree Structures - R3Leaf Dashboard Refactoring

## Before: Frontend Documentation Branch (Initial State)
*Monolithic structure with mixed concerns*

```
src/
├── app/
│   ├── account-settings/
│   │   └── [[...rest]]/
│   ├── api/
│   │   ├── ai-stream-proxy/
│   │   ├── user/
│   │   │   ├── decrement-reports/
│   │   │   ├── increment-reports/
│   │   │   └── remaining-reports/
│   │   └── webhooks/
│   │       └── user-created/
│   ├── building-form/
│   │   └── [id]/
│   ├── chat/
│   │   ├── [id]/
│   │   ├── components/
│   │   │   └── generative-ui/
│   │   ├── docs/
│   │   ├── tools/
│   │   └── types/
│   ├── org-selection/
│   │   └── [[...organization-profile]]/
│   ├── org-settings/
│   │   └── [[...organization-profile]]/
│   ├── portfolio/
│   │   └── [id]/
│   │       ├── _ai-docs/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── lib/
│   │       └── types/
│   ├── property/
│   │   └── [id]/
│   ├── report/
│   │   └── [id]/
│   ├── sign-in/
│   │   └── [[...sign-in]]/
│   ├── sign-up/
│   │   └── [[...sign-up]]/
│   ├── sources/
│   ├── terms/
│   ├── upload/
│   └── user-data/
└── components/
    ├── ui/
    ├── svgs/
    ├── accordeon.tsx
    ├── address-input.client.tsx
    ├── app-shell-layout.tsx
    ├── badge.tsx
    ├── browser-check.tsx
    ├── building-list-item.client.tsx
    ├── building-list.tsx
    ├── building-overview.tsx
    ├── button.tsx
    ├── carousel.client.tsx
    ├── chapter-navigation.tsx
    ├── chart.client.tsx
    ├── checkbox.client.tsx
    ├── checkbox.tsx
    ├── climate-data-hub.tsx
    ├── content-header.tsx
    ├── custom-popover.tsx
    ├── data-table.client.tsx
    ├── edit-data-modal.client.tsx
    ├── expandable-card.client.tsx
    ├── file-upload.client.tsx
    ├── floating-dock.tsx
    ├── form.client.tsx
    ├── gauge.tsx
    ├── portfolio-building-list-item.client.tsx
    ├── portfolio-list-item.tsx
    ├── portfolio-list.tsx
    ├── report-header.tsx
    ├── sidenav.client.tsx
    └── ... 40+ more components (70 total)
```

**Issues with this structure:**
- 🔴 Property feature lacks internal organization
- 🔴 Authentication scattered across multiple top-level folders
- 🔴 No clear vertical slice boundaries
- 🔴 Mixed concerns within features
- 🔴 Difficult to locate related functionality

---

## After: Refactor Code Base Branch (Clean Architecture)
*Vertical slice architecture with clear separation of concerns*

```
src/
├── app/
│   ├── account-settings/
│   │   └── [[...rest]]/
│   ├── api/
│   │   ├── ai-stream-proxy/
│   │   ├── user/
│   │   │   ├── decrement-reports/
│   │   │   ├── increment-reports/
│   │   │   └── remaining-reports/
│   │   └── webhooks/
│   │       └── user-created/
│   ├── auth/
│   │   ├── org-selection/
│   │   │   └── [[...organization-profile]]/
│   │   ├── org-settings/
│   │   │   └── [[...organization-profile]]/
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/
│   │   └── sign-up/
│   │       └── [[...sign-up]]/
│   ├── building-form/
│   │   └── [id]/
│   ├── buildings/
│   │   ├── components/
│   │   │   ├── building-list/
│   │   │   └── building-overview/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── services/
│   │   └── types/
│   ├── chat/
│   │   ├── [id]/
│   │   ├── components/
│   │   │   └── generative/
│   │   ├── examples/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── services/
│   │   ├── tools/
│   │   └── types/
│   ├── portfolio/
│   │   └── [id]/
│   │       ├── _ai-docs/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── lib/
│   │       └── types/
│   ├── property/
│   │   └── [id]/
│   │       ├── components/
│   │       ├── features/
│   │       │   ├── adaptation-planning/
│   │       │   ├── climate-analysis/
│   │       │   └── property-map/
│   │       ├── hooks/
│   │       ├── lib/
│   │       └── types/
│   ├── report/
│   │   └── [id]/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── services/
│   │   └── types/
│   ├── sources/
│   ├── terms/
│   ├── upload/
│   │   ├── components/
│   │   ├── services/
│   │   └── types/
│   └── user-data/
│       ├── components/
│       ├── services/
│       └── types/
├── components/
│   ├── ui/
│   ├── accordeon.tsx
│   ├── address-input.client.tsx
│   ├── app-shell-layout.tsx
│   ├── badge.tsx
│   ├── browser-check.tsx
│   ├── climate-data-hub.tsx
│   ├── content-header.tsx
│   ├── edit-data-modal.client.tsx
│   ├── form.client.tsx
│   ├── sidenav.client.tsx
│   └── ... 8+ legacy components (20 total)
└── shared/
    ├── components/
    │   ├── ui/
    │   ├── accordeon.tsx
    │   ├── badge.tsx
    │   ├── button.tsx
    │   ├── carousel.client.tsx
    │   ├── chart.client.tsx
    │   ├── checkbox.client.tsx
    │   ├── checkbox.tsx
    │   ├── custom-popover.tsx
    │   ├── data-table.client.tsx
    │   ├── expandable-card.client.tsx
    │   ├── floating-dock.tsx
    │   ├── gauge.tsx
    │   ├── input.tsx
    │   ├── label.client.tsx
    │   ├── loading.tsx
    │   ├── modal.client.tsx
    │   ├── popover.client.tsx
    │   ├── progress.client.tsx
    │   ├── radix-tooltip.client.tsx
    │   ├── resizable.client.tsx
    │   ├── select.client.tsx
    │   ├── separator.client.tsx
    │   ├── skeleton.tsx
    │   ├── table.tsx
    │   ├── tabs.client.tsx
    │   ├── tooltip-inner.tsx
    │   └── tooltip.tsx (29 total)
    └── hooks/
```

**Improvements in this structure:**
- ✅ **Centralized Auth**: All authentication moved to `/auth` module
- ✅ **Vertical Slices**: Property features organized by domain (`/features`)
- ✅ **Consistent Structure**: Every module follows same pattern (components, hooks, lib, services, types)
- ✅ **Feature Boundaries**: Clear separation between adaptation-planning, climate-analysis, property-map
- ✅ **Enhanced Modules**: Buildings, reports, upload, user-data now have full structure
- ✅ **Scalable**: Easy to add new features and maintain existing ones

---

## Key Architectural Changes

### 1. Authentication Consolidation
```diff
- org-selection/
- org-settings/
- sign-in/
- sign-up/
+ auth/
+   ├── org-selection/
+   ├── org-settings/
+   ├── sign-in/
+   └── sign-up/
```

### 2. Property Feature Vertical Slicing
```diff
- property/[id]/           # Monolithic
+ property/[id]/
+   ├── components/
+   ├── features/          # Feature-based
+   │   ├── adaptation-planning/
+   │   ├── climate-analysis/
+   │   └── property-map/
+   ├── hooks/
+   ├── lib/
+   └── types/
```

### 3. Enhanced Module Structure
```diff
- upload/                  # Minimal
+ upload/
+   ├── components/
+   ├── services/
+   └── types/
```

This transformation demonstrates how vertical slice architecture creates:
- **Clear boundaries** between features
- **Consistent patterns** across modules
- **Easy navigation** for developers
- **Scalable structure** for future growth