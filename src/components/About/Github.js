import React, { useEffect, useMemo, useState } from "react";
import { Row } from "react-bootstrap";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./LeetCodeHeatmap.css";

// ✅ Your LeetCode username from https://leetcode.com/u/kedharnadhkamatham/
const LEETCODE_USERNAME = "kedharnadhkamatham";

function toDateString(date) {
  return date.toISOString().slice(0, 10);
}

function buildHeatmapValues(calendarMap) {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 364);

  const normalized = {};

  Object.entries(calendarMap || {}).forEach(([ts, count]) => {
    const d = new Date(Number(ts) * 1000);
    normalized[toDateString(d)] = Number(count) || 0;
  });

  const values = [];
  const cursor = new Date(startDate);

  while (cursor <= endDate) {
    const key = toDateString(cursor);
    values.push({
      date: key,
      count: normalized[key] || 0,
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  return { startDate, endDate, values };
}

function getClassNameForCount(count) {
  if (!count) return "lc-empty";
  if (count <= 1) return "lc-1";
  if (count <= 3) return "lc-2";
  if (count <= 6) return "lc-3";
  return "lc-4";
}

function Github() {
  const [calendarMap, setCalendarMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchLeetCodeCalendar() {
      try {
        const res = await fetch(
          `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/calendar`
        );
        const data = await res.json();

        let raw =
          data?.submissionCalendar ||
          data?.calendar ||
          data?.data?.matchedUser?.userCalendar?.submissionCalendar ||
          {};

        if (typeof raw === "string") {
          try {
            raw = JSON.parse(raw);
          } catch {
            raw = {};
          }
        }

        if (!cancelled) setCalendarMap(raw || {});
      } catch (error) {
        console.error("Failed to fetch LeetCode calendar:", error);
        if (!cancelled) setCalendarMap({});
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchLeetCodeCalendar();
    return () => {
      cancelled = true;
    };
  }, []);

  const { startDate, endDate, values } = useMemo(
    () => buildHeatmapValues(calendarMap),
    [calendarMap]
  );

  const totalSubmissions = values.reduce((sum, day) => sum + (day.count || 0), 0);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      {loading ? (
        <p style={{ color: "#d6d6d6" }}>Loading LeetCode heatmap...</p>
      ) : (
        <div style={{ width: "95%", overflowX: "auto" }}>
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={values}
            gutterSize={4}
            showWeekdayLabels={false}
            classForValue={(value) => getClassNameForCount(value?.count || 0)}
            titleForValue={(value) =>
              value?.date
                ? `${value.date}: ${value.count || 0} submission${
                    (value.count || 0) === 1 ? "" : "s"
                  }`
                : ""
            }
          />

          <p style={{ color: "#d6d6d6", marginTop: "14px" }}>
            {totalSubmissions} submissions in the last year
          </p>
        </div>
      )}
    </Row>
  );
}

export default Github;