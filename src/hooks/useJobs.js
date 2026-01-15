import { useEffect, useState } from "react";

const STORAGE_KEY = "job-tracker-jobs";

export default function useJobs() {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs((prev) => [...prev, job]);
  };

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const updateJob = (updatedJob) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  return { jobs, addJob, updateJob, deleteJob };
}
