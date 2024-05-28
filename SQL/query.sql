SET STATISTICS TIME ON;
WITH RecursiveSubdivisions AS (
    SELECT id, name, parent_id, 0 AS level
    FROM subdivisions
    WHERE id = (SELECT subdivision_id FROM collaborators WHERE id = 710253)
    
    UNION ALL
    
    SELECT s.id, s.name, s.parent_id, rs.level + 1
    FROM subdivisions s
    INNER JOIN RecursiveSubdivisions rs ON s.parent_id = rs.id
),
FilteredEmployees AS (
    SELECT c.id, c.name, c.subdivision_id, rs.name AS sub_name, rs.level
    FROM collaborators c
    INNER JOIN RecursiveSubdivisions rs ON c.subdivision_id = rs.id
    WHERE c.age < 40
    AND c.subdivision_id NOT IN (100055, 100059)
),
SubdivisionEmployeeCount AS (
    SELECT subdivision_id, COUNT(*) AS colls_count
    FROM collaborators
    GROUP BY subdivision_id
)
SELECT 
    fe.id,
    fe.name,
    fe.sub_name,
    fe.subdivision_id AS sub_id,
    fe.level AS sub_level,
    sec.colls_count
FROM 
    FilteredEmployees fe
INNER JOIN 
    SubdivisionEmployeeCount sec ON fe.subdivision_id = sec.subdivision_id
ORDER BY 
    fe.level;
SET STATISTICS TIME OFF;