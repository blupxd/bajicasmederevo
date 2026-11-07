import path from "path";
import { promises as fs } from "fs";

const ROOT = path.join(process.cwd(), "public/gallery");
const IMAGE = /\.(jpe?g|png|webp)$/i;

// The photographs of one project folder (public/gallery/<group>/<project>), as site paths
export const projectPhotos = async (group: string, project: string) =>
  (await fs.readdir(path.join(ROOT, group, project)))
    .filter((f) => IMAGE.test(f))
    .sort((a, b) => a.localeCompare(b, "sr", { numeric: true }))
    .map((f) => `/gallery/${group}/${project}/${f}`);

// Every group folder with its project folders and their photographs (the gallery page)
export const allGroups = async () =>
  Promise.all(
    (await fs.readdir(ROOT)).map(async (group) => ({
      folder: group,
      projects: await Promise.all(
        (await fs.readdir(path.join(ROOT, group))).map(async (project) => ({
          folder: project,
          files: (await projectPhotos(group, project)).map((src) => src.split("/").pop()!),
        }))
      ),
    }))
  );
