document.addEventListener('DOMContentLoaded', function() {
    // Schedule data
    const scheduleData = [
        {
            date: "June 30, 2025",
            day: "Monday",
            tasks: [
                {
                    category: "dsa",
                    title: "Dynamic Programming Basics (4.5 hrs)",
                    details: [
                        "Understand recursion to DP shift (memo vs tabulation)",
                        "Problems: Fibonacci, Climb Stairs, Unique Paths, Subset Sum"
                    ]
                },
                {
                    category: "cs",
                    title: "DBMS Deep Dive (1.5 hrs)",
                    details: [
                        "Normalization (1NF to BCNF), Functional Dependencies",
                        "Practice: Draw ER diagram for a basic e-commerce site"
                    ]
                },
                {
                    category: "aptitude",
                    title: "Percentages, Averages (1 hr)",
                    details: []
                },
                {
                    category: "other",
                    title: "Reflect (1 hr)",
                    details: [
                        "Summarize patterns in DP"
                    ]
                }
            ]
        },
        {
            date: "July 1, 2025",
            day: "Tuesday",
            tasks: [
                {
                    category: "dsa",
                    title: "0/1 Knapsack + DP on Subsequences (4 hrs)",
                    details: [
                        "Problems: Target Sum, Partition Equal Subset Sum, LCS"
                    ]
                },
                {
                    category: "cs",
                    title: "OS Core Concepts (2 hrs)",
                    details: [
                        "Process Scheduling (FCFS, RR, SJF), Multithreading, Context Switching"
                    ]
                },
                {
                    category: "aptitude",
                    title: "Time & Work, Time-Speed-Distance (1.5 hrs)",
                    details: []
                },
                {
                    category: "cs",
                    title: "CS MCQs (0.5 hr)",
                    details: [
                        "OS + DBMS mixed MCQs"
                    ]
                }
            ]
        },
        {
            date: "July 2, 2025",
            day: "Wednesday",
            tasks: [
                {
                    category: "dsa",
                    title: "Matrix DP (3.5 hrs)",
                    details: [
                        "Problems: Minimum Path Sum, Unique Paths II, Cherry Pickup (2D Grid)"
                    ]
                },
                {
                    category: "cs",
                    title: "CN Essentials (2 hrs)",
                    details: [
                        "TCP vs UDP, IP/TCP Headers, Subnetting basics"
                    ]
                },
                {
                    category: "aptitude",
                    title: "Mixtures, Ratios, Pipes & Cisterns (2 hrs)",
                    details: []
                },
                {
                    category: "other",
                    title: "Mock (0.5 hr)",
                    details: [
                        "1 DSA timed problem + 5 short CS MCQs"
                    ]
                }
            ]
        },
        {
            date: "July 3, 2025",
            day: "Thursday",
            tasks: [
                {
                    category: "dsa",
                    title: "Revision of all DP patterns (4 hrs)",
                    details: [
                        "One-pager summary of transitions, edge cases, base conditions"
                    ]
                },
                {
                    category: "cs",
                    title: "OOPs Fundamentals (2 hrs)",
                    details: [
                        "SOLID principles, real-world mapping, interface vs abstract class"
                    ]
                },
                {
                    category: "aptitude",
                    title: "Number Systems, Series, Logs (1.5 hrs)",
                    details: []
                },
                {
                    category: "other",
                    title: "Mock Interview (1.5 hrs)",
                    details: [
                        "2 coding + 5 CS conceptual + 3 HR questions aloud"
                    ]
                }
            ]
        },
        {
            date: "July 4, 2025",
            day: "Friday",
            tasks: [
                {
                    category: "dsa",
                    title: "Graphs - BFS, DFS, Cycle Detection (4.5 hrs)",
                    details: [
                        "Implement from scratch + dry run with test cases"
                    ]
                },
                {
                    category: "cs",
                    title: "SQL Joins + Transactions (1.5 hrs)",
                    details: [
                        "Practice: Write queries from Leetcode/GFG SQL problems"
                    ]
                },
                {
                    category: "aptitude",
                    title: "Profit & Loss, SI/CI (1.5 hrs)",
                    details: []
                },
                {
                    category: "other",
                    title: "Behavioral (0.5 hr)",
                    details: [
                        "Practice STAR format for common HR prompts"
                    ]
                }
            ]
        },
        {
            date: "July 5, 2025",
            day: "Saturday",
            tasks: [
                {
                    category: "dsa",
                    title: "Graphs - Topo Sort, SCC, Union-Find (4 hrs)",
                    details: [
                        "Problems: Course Schedule, Redundant Connection, DSU basics"
                    ]
                },
                {
                    category: "cs",
                    title: "Quick fire revision – DBMS + OS + CN + OOPs (2 hrs)",
                    details: [
                        "Use flashcards or curated MCQs"
                    ]
                },
                {
                    category: "aptitude",
                    title: "Mixed Set Practice (10 Qs) (1.5 hrs)",
                    details: []
                },
                {
                    category: "other",
                    title: "Mock (1.5 hrs)",
                    details: [
                        "Interview-style test: 1 Graph problem + 6 CS theory + 2 aptitude"
                    ]
                }
            ]
        },
        {
            date: "July 6, 2025",
            day: "Sunday",
            tasks: [
                {
                    category: "dsa",
                    title: "Final revision: DP patterns + Graphs summary notes (1.5 hrs)",
                    details: []
                },
                {
                    category: "cs",
                    title: "Final review of short notes/cheatsheets (1.5 hrs)",
                    details: []
                },
                {
                    category: "aptitude",
                    title: "Quick revision: Formulas + 5 practice problems (1 hr)",
                    details: []
                },
                {
                    category: "other",
                    title: "Behavioral (1 hr)",
                    details: [
                        "Mock HR with a friend or aloud"
                    ]
                },
                {
                    category: "other",
                    title: "Setup (1 hr)",
                    details: [
                        "Interview workspace, test editor, lighting, etc."
                    ]
                }
            ]
        },
        {
            date: "July 7, 2025",
            day: "Monday",
            tasks: [
                {
                    category: "dsa",
                    title: "Flashcard revision: Patterns, edge cases (1 hr)",
                    details: []
                },
                {
                    category: "aptitude",
                    title: "Warmup: 10 mixed questions (1 hr)",
                    details: []
                },
                {
                    category: "other",
                    title: "Behavioral (1 hr)",
                    details: [
                        "Confidence boosting review"
                    ]
                },
                {
                    category: "other",
                    title: "Relax",
                    details: [
                        "Go easy. No new concepts."
                    ]
                }
            ]
        },
        {
            date: "July 8, 2025",
            day: "Tuesday",
            tasks: [
                {
                    category: "other",
                    title: "Mental Refresh",
                    details: [
                        "Solve 2 warm-up problems (easy/medium)",
                        "Read 1-page CS + Aptitude cheat notes",
                        "Focus on staying relaxed and confident"
                    ]
                }
            ]
        },
        {
            date: "July 9, 2025",
            day: "Wednesday",
            tasks: [
                {
                    category: "other",
                    title: "Interview Day",
                    details: [
                        "You've prepped deeply. You're READY! 💪"
                    ]
                }
            ]
        }
    ];

    // Render the schedule
    renderSchedule();
    
    // Set the current date in the footer
    const currentDate = new Date();
    document.getElementById('current-date').textContent = currentDate.toLocaleDateString();
    
    // Update progress tracking
    updateProgress();

    // Function to render the schedule
    function renderSchedule() {
        const scheduleContainer = document.getElementById('schedule-container');
        
        scheduleData.forEach((dayData, index) => {
            // Create day card
            const dayCard = document.createElement('div');
            dayCard.className = 'day-card';
            dayCard.setAttribute('data-day', index);
            
            // Check if this is today
            const today = new Date('2025-07-01'); // Using the date from the prompt
            const dayDate = new Date(dayData.date);
            
            if (today.toDateString() === dayDate.toDateString()) {
                dayCard.classList.add('today');
            }
            
            // Create day header
            const dayHeader = document.createElement('div');
            dayHeader.className = 'day-header';
            
            const dayName = document.createElement('h2');
            dayName.textContent = dayData.day;
            
            const dayDate2 = document.createElement('div');
            dayDate2.className = 'day-date';
            dayDate2.textContent = dayData.date;
            
            const dayProgress = document.createElement('div');
            dayProgress.className = 'day-progress';
            dayProgress.setAttribute('id', `day-progress-${index}`);
            dayProgress.textContent = '0%';
            
            dayHeader.appendChild(dayName);
            dayHeader.appendChild(dayDate2);
            dayHeader.appendChild(dayProgress);
            
            // Create tasks container
            const dayTasks = document.createElement('div');
            dayTasks.className = 'day-tasks';
            
            // Add tasks
            dayData.tasks.forEach((task, taskIndex) => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.setAttribute('data-day', index);
                taskItem.setAttribute('data-task', taskIndex);
                
                const taskCheckbox = document.createElement('div');
                taskCheckbox.className = 'task-checkbox';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        taskItem.classList.add('task-completed');
                    } else {
                        taskItem.classList.remove('task-completed');
                    }
                    updateProgress();
                });
                
                taskCheckbox.appendChild(checkbox);
                
                const taskContent = document.createElement('div');
                taskContent.className = 'task-content';
                
                const taskTitle = document.createElement('div');
                taskTitle.className = 'task-title';
                
                const taskCategory = document.createElement('span');
                taskCategory.className = `task-category category-${task.category}`;
                taskCategory.textContent = task.category.toUpperCase();
                
                taskTitle.appendChild(taskCategory);
                taskTitle.appendChild(document.createTextNode(task.title));
                
                const taskDetails = document.createElement('div');
                taskDetails.className = 'task-details';
                
                if (task.details.length > 0) {
                    const detailsList = document.createElement('ul');
                    task.details.forEach(detail => {
                        const detailItem = document.createElement('li');
                        detailItem.textContent = detail;
                        detailsList.appendChild(detailItem);
                    });
                    taskDetails.appendChild(detailsList);
                }
                
                taskContent.appendChild(taskTitle);
                taskContent.appendChild(taskDetails);
                
                taskItem.appendChild(taskCheckbox);
                taskItem.appendChild(taskContent);
                
                dayTasks.appendChild(taskItem);
            });
            
            dayCard.appendChild(dayHeader);
            dayCard.appendChild(dayTasks);
            
            scheduleContainer.appendChild(dayCard);
        });
    }

    // Function to update progress
    function updateProgress() {
        let totalTasks = 0;
        let completedTasks = 0;
        
        // Count total tasks and completed tasks
        document.querySelectorAll('.task-item').forEach(task => {
            totalTasks++;
            if (task.classList.contains('task-completed')) {
                completedTasks++;
            }
        });
        
        // Update overall progress
        const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        document.getElementById('overall-progress').style.width = `${progressPercentage}%`;
        document.getElementById('tasks-completed').textContent = completedTasks;
        document.getElementById('completion-percentage').textContent = `${progressPercentage}%`;
        
        // Update progress for each day
        scheduleData.forEach((day, index) => {
            const dayTasks = document.querySelectorAll(`.task-item[data-day="${index}"]`);
            const dayCompletedTasks = document.querySelectorAll(`.task-item[data-day="${index}"].task-completed`);
            
            const dayProgressPercentage = dayTasks.length > 0 ? Math.round((dayCompletedTasks.length / dayTasks.length) * 100) : 0;
            document.getElementById(`day-progress-${index}`).textContent = `${dayProgressPercentage}%`;
        });
        
        // Calculate days passed and remaining
        const startDate = new Date('2025-06-30');
        const endDate = new Date('2025-07-09');
        const today = new Date('2025-07-01'); // Using the date from the prompt
        
        const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
        const daysPassed = Math.max(0, Math.ceil((today - startDate) / (1000 * 60 * 60 * 24)));
        const daysRemaining = Math.max(0, totalDays - daysPassed);
        
        document.getElementById('days-passed').textContent = daysPassed;
        document.getElementById('days-remaining').textContent = daysRemaining;
    }
});