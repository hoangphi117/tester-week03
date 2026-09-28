* commit 04b6b4deb9e7b63686df491bd3973187d1e950ba
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 21:09:17 2026 +0700
| 
|     feat: add AI audit report and critique documents
| 
|  ai-audit-report-23120272.md => reports/ai-audit-report-23120272.md | 0
|  ai-critique-23120272.md => reports/ai-critique-23120272.md         | 0
|  git-commit-log-23120272.md => reports/git-commit-log-23120272.md   | 0
|  3 files changed, 0 insertions(+), 0 deletions(-)
| 
* commit 8fc8392b71ae44a44a05da97f45c3f7b0720f9fd
| Merge: 864e0d0 4407b43
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 21:07:14 2026 +0700
| 
|     Merge branch 'main' into Build3
| 
* commit 864e0d09fae711c2de46fd47cc499f8c8002aa9b
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 20:55:01 2026 +0700
| 
|     feat: add AI audit report and critique documents; update test run summaries for builds 3 and 4
| 
|  ai-audit-report-23120272.md   |  17 +++
|  ai-critique-23120272.md       |   8 ++
|  git-commit-log-23120272.md    | 225 ++++++++++++++++++++++++++++++++++++++++
|  tests/test-runs/TR-Build-3.md |  14 ++-
|  tests/test-runs/TR-Build-4.md |  22 ++--
|  5 files changed, 274 insertions(+), 12 deletions(-)
| 
* commit c91de07adcd965eed6f8fa2f1bbcfdc8ec3476ec
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 20:19:42 2026 +0700
| 
|     docs: add bug reports BUG-004 through BUG-007
| 
|  tests/bugs/BUG-004.md | 68 +++++++++++++++++++++++++++++++++++++++++++++
|  tests/bugs/BUG-005.md | 74 +++++++++++++++++++++++++++++++++++++++++++++++++
|  tests/bugs/BUG-006.md | 69 +++++++++++++++++++++++++++++++++++++++++++++
|  tests/bugs/BUG-007.md | 69 +++++++++++++++++++++++++++++++++++++++++++++
|  4 files changed, 280 insertions(+)
| 
* commit 582521612d12bf2bce611e8b0f7a7a951ba4b7fd
| Merge: 1a89019 59d1437
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 20:12:06 2026 +0700
| 
|     Merge branch 'main' into Build3
| 
* commit 1a890198e97f1ff9867e8125f67b22d5a0db7f8d
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 20:11:34 2026 +0700
| 
|     fix: edit bug related TR-Build 3 and 4
| 
|  tests/test-runs/TR-Build-3.md |  4 ++--
|  tests/test-runs/TR-Build-4.md | 12 ++++++------
|  2 files changed, 8 insertions(+), 8 deletions(-)
|   
*   commit 76e4a3c7acd252835daeabdfe24bbf3ffa8c5251
|\  Merge: 3552a96 cff4e78
| | Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | Date:   Mon Sep 28 19:42:15 2026 +0700
| | 
| |     Merge branch 'main' into Build3
| | 
* | commit 3552a964c47814438142b16b8034852276d9a601
| | Merge: 946b505 a6d873a
| | Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | Date:   Mon Sep 28 19:38:07 2026 +0700
| | 
| |     Merge branch 'main' into Build3
| | 
| * commit cff4e7830d8dfce595d6c7360f9b0ecf74b51eb9
|/  Merge: cc30ce8 946b505
|   Author: Le Quoc Huy <lehuy1519@gmail.com>
|   Date:   Mon Sep 28 19:41:14 2026 +0700
|   
|       Merge pull request #6 from hoangphi117/Build3
|       
|       Merge Build3 into main
| 
* commit 946b5059cd5948ef9c491974db11403b214ba9dd
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 19:37:12 2026 +0700
| 
|     docs: add test run results TC-INPUT-014 for build 3 and build 4
| 
|  tests/test-runs/TR-Build-3.md | 1 +
|  tests/test-runs/TR-Build-4.md | 1 +
|  2 files changed, 2 insertions(+)
| 
* commit ce7096b7d528cba00699e5c0e5b2590507788373
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 18:18:17 2026 +0700
| 
|     feat: run test for build 4
| 
|  .env                                       |   1 +
|  tests/test-cases/options/TC-OPTIONS-003.md |   1 -
|  tests/test-runs/TR-Build-3.md              | 112 +++++++++++++-------------
|  tests/test-runs/TR-Build-4.md              | 114 +++++++++++++--------------
|  4 files changed, 112 insertions(+), 116 deletions(-)
| 
* commit f95262088b76834099e3fa68d5f82eacae71830d
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 17:41:39 2026 +0700
| 
|     fix: update logic test case and scripts
| 
|  .env                                             | Bin 264 -> 0 bytes
|  .gitignore                                       |   1 +
|  src/tests/test-cases/INP/input.spec.ts           |  12 ++----------
|  src/tests/test-cases/OPT/options.spec.ts         |   8 ++------
|  src/tests/test-cases/VAL/validation.spec.ts      |  18 ++++--------------
|  tests/test-cases/input/TC-INPUT-007.md           |   4 ++--
|  tests/test-cases/input/TC-INPUT-008.md           |   4 ++--
|  tests/test-cases/options/TC-OPTIONS-008.md       |   7 ++-----
|  tests/test-cases/validation/TC-VALIDATION-001.md |   4 ++--
|  tests/test-cases/validation/TC-VALIDATION-006.md |   4 ++--
|  tests/test-cases/validation/TC-VALIDATION-007.md |   3 +--
|  11 files changed, 20 insertions(+), 45 deletions(-)
| 
* commit abd28bb27185fad9ea520a958677373ee031f8c8
| Merge: e46bbc5 4b5c627
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 17:10:34 2026 +0700
| 
|     Merge branch 'main' into Build3
| 
* commit e46bbc580dba920608aaa68542cd1ae4c98ccc49
| Merge: 706b6f7 73943c3
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 15:51:52 2026 +0700
| 
|     Merge branch 'main' into Build3
| 
* commit 706b6f7bd5f34126b78ddf385c6765b90233034e
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 15:51:24 2026 +0700
| 
|     fix: edit Tester column
| 
|  tests/test-runs/TR-Build-3.md | 108 ++++++++++++++++++++--------------------
|  1 file changed, 54 insertions(+), 54 deletions(-)
| 
* commit 9a9d45970b450c6412375c6bbe6efb4e6c9681ec
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 15:42:39 2026 +0700
| 
|     feat: test 3 module build3 (answer, input, calculate)
| 
|  tests/test-runs/TR-Build-3.md | 75 ++++++++++++++++++++++-------------------
|  tests/test-runs/TR-Build-4.md | 66 ++++++++++++++++++++++++++++++++++++
|  2 files changed, 107 insertions(+), 34 deletions(-)
| 
* commit 4de867784640466e284c1c79f5adf9b3dc12b06f
| Merge: 0c8b473 a80822f
| Author: Lê Quốc Huy <lehuy1519@gmail.com>
| Date:   Mon Sep 28 14:57:36 2026 +0700
| 
|     Merge branch 'main' into Build3
| 
* commit 0c8b4737405cd558762123a1c68806eb7a56eef7
  Author: Lê Quốc Huy <lehuy1519@gmail.com>
  Date:   Mon Sep 28 14:57:09 2026 +0700
  
      feat: test run format
  
   tests/test-runs/TR-Build-3.md | 57 +++++++++++++++++++++++++++++++++++++++++
   1 file changed, 57 insertions(+)
    
*   commit 9f2683bedec8d2430f68008a142b88fa84d40066
|\  Merge: 4b5c627 93a4795 57533c9
| | Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | Date:   Mon Sep 28 17:06:03 2026 +0700
| | 
| |     On main: Save changes from main
| | 
| * commit 57533c918b1b891f1aa0545249ddef3779c4c1dc
|   Author: Lê Quốc Huy <lehuy1519@gmail.com>
|   Date:   Mon Sep 28 17:06:03 2026 +0700
|   
|       untracked files on main: 4b5c627 add script for build 1
| 
* commit 93a479572e2e484645b5ec29aace60590d925fe4
  Author: Lê Quốc Huy <lehuy1519@gmail.com>
  Date:   Mon Sep 28 17:06:03 2026 +0700
  
      index on main: 4b5c627 add script for build 1
