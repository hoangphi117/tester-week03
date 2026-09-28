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
*   commit abd28bb27185fad9ea520a958677373ee031f8c8
|\  Merge: e46bbc5 4b5c627
| | Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | Date:   Mon Sep 28 17:10:34 2026 +0700
| | 
| |     Merge branch 'main' into Build3
| |   
* |   commit e46bbc580dba920608aaa68542cd1ae4c98ccc49
|\ \  Merge: 706b6f7 73943c3
| | | Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | | Date:   Mon Sep 28 15:51:52 2026 +0700
| | | 
| | |     Merge branch 'main' into Build3
| | | 
* | | commit 706b6f7bd5f34126b78ddf385c6765b90233034e
| | | Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | | Date:   Mon Sep 28 15:51:24 2026 +0700
| | | 
| | |     fix: edit Tester column
| | | 
| | |  tests/test-runs/TR-Build-3.md | 108 ++++++++++++++++++------------------
| | |  1 file changed, 54 insertions(+), 54 deletions(-)
| | | 
* | | commit 9a9d45970b450c6412375c6bbe6efb4e6c9681ec
| | | Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | | Date:   Mon Sep 28 15:42:39 2026 +0700
| | | 
| | |     feat: test 3 module build3 (answer, input, calculate)
| | | 
| | |  tests/test-runs/TR-Build-3.md | 75 ++++++++++++++++++++-----------------
| | |  tests/test-runs/TR-Build-4.md | 66 ++++++++++++++++++++++++++++++++
| | |  2 files changed, 107 insertions(+), 34 deletions(-)
| | |   
* | |   commit 4de867784640466e284c1c79f5adf9b3dc12b06f
|\ \ \  Merge: 0c8b473 a80822f
| | | | Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | | | Date:   Mon Sep 28 14:57:36 2026 +0700
| | | | 
| | | |     Merge branch 'main' into Build3
| | | | 
* | | | commit 0c8b4737405cd558762123a1c68806eb7a56eef7
| | | | Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | | | Date:   Mon Sep 28 14:57:09 2026 +0700
| | | | 
| | | |     feat: test run format
| | | | 
| | | |  tests/test-runs/TR-Build-3.md | 57 +++++++++++++++++++++++++++++++++++
| | | |  1 file changed, 57 insertions(+)
| | | |     
| | | | *   commit 9f2683bedec8d2430f68008a142b88fa84d40066
| | | |/|\  Merge: 4b5c627 93a4795 57533c9
| | | | | | Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | | | | | Date:   Mon Sep 28 17:06:03 2026 +0700
| | | | | | 
| | | | | |     On main: Save changes from main
| | | | | | 
| | | | | * commit 57533c918b1b891f1aa0545249ddef3779c4c1dc
| | | | |   Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | | | |   Date:   Mon Sep 28 17:06:03 2026 +0700
| | | | |   
| | | | |       untracked files on main: 4b5c627 add script for build 1
| | | | | 
| | | | * commit 93a479572e2e484645b5ec29aace60590d925fe4
| | | |/  Author: Lê Quốc Huy <lehuy1519@gmail.com>
| | | |   Date:   Mon Sep 28 17:06:03 2026 +0700
| | | |   
| | | |       index on main: 4b5c627 add script for build 1
| | | | 
| | | * commit 4b5c62717ef6e9558e099ecccf65a6386c7f68f6
| | | | Author: hoangphi117 <nghphi1206@gmail.com>
| | | | Date:   Mon Sep 28 15:58:08 2026 +0700
| | | | 
| | | |     add script for build 1
| | | | 
| | | |  .env                                        | Bin 0 -> 264 bytes
| | | |  .env.example                                | Bin 0 -> 123 bytes
| | | |  .gitignore                                  |   5 +
| | | |  README.md                                   |  91 ++++++++++++
| | | |  package-lock.json                           |  78 +++++++++++
| | | |  package.json                                |  31 +++++
| | | |  playwright.config.ts                        |  27 ++++
| | | |  src/pages/calculator.page.ts                |  88 ++++++++++++
| | | |  src/tests/test-cases/ANS/answer.spec.ts     | 102 ++++++++++++++
| | | |  src/tests/test-cases/CAL/calculate.spec.ts  | 113 +++++++++++++++
| | | |  src/tests/test-cases/INP/input.spec.ts      | 132 ++++++++++++++++++
| | | |  src/tests/test-cases/OPR/operation.spec.ts  |  44 ++++++
| | | |  src/tests/test-cases/OPT/options.spec.ts    |  94 +++++++++++++
| | | |  src/tests/test-cases/VAL/validation.spec.ts |  93 +++++++++++++
| | | |  tests/test-runs/TR-Build-1.md               | 147 ++++++++++----------
| | | |  15 files changed, 971 insertions(+), 74 deletions(-)
| | | | 
| | | * commit b060d2a7c6d9cb0f2a5870c085bf3cd1cdebdc55
| | |/  Author: hoangphi117 <nghphi1206@gmail.com>
| | |   Date:   Mon Sep 28 15:16:33 2026 +0700
| | |   
| | |       generate test run for Build 1 and Build 2 (55 test cases)
| | |   
| | |    tests/test-runs/TR-Build-1.md | 84 +++++++++++++++++++++++++++++++++++
| | |    tests/test-runs/TR-Build-2.md | 84 +++++++++++++++++++++++++++++++++++
| | |    2 files changed, 168 insertions(+)
| | | 
| | * commit 73943c37e548adf9ffc31a869955843d321bfd61
| |/| Merge: a80822f 379c0b4
| | | Author: Nguyễn Hoàng Phi <145087008+hoangphi117@users.noreply.github.com>
| | | Date:   Mon Sep 28 15:12:42 2026 +0700
| | | 
| | |     Merge pull request #1 from hoangphi117/fix/input-max-length
| | |     
| | |     fix test cases
| | | 
| | * commit 379c0b49ab99a2f0c9e5bbd49ab3780899c14609
| |/  Author: hoangphi117 <nghphi1206@gmail.com>
| |   Date:   Mon Sep 28 15:10:10 2026 +0700
| |   
| |       fix test cases
| |   
| |    tests/test-cases/answer/TC-ANSWER-009.md | 10 +++++++--
| |    tests/test-cases/input/TC-INPUT-011.md   | 21 +++++++++++------
| |    tests/test-cases/input/TC-INPUT-014.md   | 31 ++++++++++++++++++++++++++
| |    3 files changed, 53 insertions(+), 9 deletions(-)
| | 
| * commit a80822f5fa6171fa617968c6674c7750c4cf54ac
|/  Author: hoangphi117 <nghphi1206@gmail.com>
|   Date:   Mon Sep 28 14:55:49 2026 +0700
|   
|       add OPTIONS module
|   
|    tests/test-cases/options/TC-OPTIONS-001.md | 26 ++++++++++++++++++++
|    tests/test-cases/options/TC-OPTIONS-002.md | 30 +++++++++++++++++++++++
|    tests/test-cases/options/TC-OPTIONS-003.md | 27 ++++++++++++++++++++
|    tests/test-cases/options/TC-OPTIONS-004.md | 34 ++++++++++++++++++++++++++
|    tests/test-cases/options/TC-OPTIONS-005.md | 34 ++++++++++++++++++++++++++
|    tests/test-cases/options/TC-OPTIONS-006.md | 34 ++++++++++++++++++++++++++
|    tests/test-cases/options/TC-OPTIONS-007.md | 34 ++++++++++++++++++++++++++
|    tests/test-cases/options/TC-OPTIONS-008.md | 34 ++++++++++++++++++++++++++
|    tests/test-cases/options/TC-OPTIONS-009.md | 29 ++++++++++++++++++++++
|    9 files changed, 282 insertions(+)
| 
* commit 421cd87491e0de3d357b09b9adc876d3ca4417a0
  Author: hoangphi117 <nghphi1206@gmail.com>
  Date:   Mon Sep 28 14:44:08 2026 +0700
  
      generate test case
  
   src/.gitkeep                                     |  0
   tests/test-cases/.gitkeep                        |  0
   tests/test-cases/answer/TC-ANSWER-001.md         | 33 +++++++++++++++++++++
   tests/test-cases/answer/TC-ANSWER-002.md         | 32 ++++++++++++++++++++
   tests/test-cases/answer/TC-ANSWER-003.md         | 32 ++++++++++++++++++++
   tests/test-cases/answer/TC-ANSWER-004.md         | 32 ++++++++++++++++++++
   tests/test-cases/answer/TC-ANSWER-005.md         | 34 ++++++++++++++++++++++
   tests/test-cases/answer/TC-ANSWER-006.md         | 32 ++++++++++++++++++++
   tests/test-cases/answer/TC-ANSWER-007.md         | 34 ++++++++++++++++++++++
   tests/test-cases/answer/TC-ANSWER-008.md         | 33 +++++++++++++++++++++
   tests/test-cases/answer/TC-ANSWER-009.md         | 33 +++++++++++++++++++++
   tests/test-cases/calculate/TC-CALCULATE-001.md   | 31 ++++++++++++++++++++
   tests/test-cases/calculate/TC-CALCULATE-002.md   | 31 ++++++++++++++++++++
   tests/test-cases/calculate/TC-CALCULATE-003.md   | 31 ++++++++++++++++++++
   tests/test-cases/calculate/TC-CALCULATE-004.md   | 31 ++++++++++++++++++++
   tests/test-cases/calculate/TC-CALCULATE-005.md   | 31 ++++++++++++++++++++
   tests/test-cases/calculate/TC-CALCULATE-006.md   | 33 +++++++++++++++++++++
   tests/test-cases/calculate/TC-CALCULATE-007.md   | 31 ++++++++++++++++++++
   tests/test-cases/calculate/TC-CALCULATE-008.md   | 31 ++++++++++++++++++++
   tests/test-cases/calculate/TC-CALCULATE-009.md   | 33 +++++++++++++++++++++
   tests/test-cases/calculate/TC-CALCULATE-010.md   | 31 ++++++++++++++++++++
   tests/test-cases/input/TC-INPUT-001.md           | 28 ++++++++++++++++++
   tests/test-cases/input/TC-INPUT-002.md           | 28 ++++++++++++++++++
   tests/test-cases/input/TC-INPUT-003.md           | 29 ++++++++++++++++++
   tests/test-cases/input/TC-INPUT-004.md           | 29 ++++++++++++++++++
   tests/test-cases/input/TC-INPUT-005.md           | 28 ++++++++++++++++++
   tests/test-cases/input/TC-INPUT-006.md           | 28 ++++++++++++++++++
   tests/test-cases/input/TC-INPUT-007.md           | 31 ++++++++++++++++++++
   tests/test-cases/input/TC-INPUT-008.md           | 31 ++++++++++++++++++++
   tests/test-cases/input/TC-INPUT-009.md           | 32 ++++++++++++++++++++
   tests/test-cases/input/TC-INPUT-010.md           | 32 ++++++++++++++++++++
   tests/test-cases/input/TC-INPUT-011.md           | 32 ++++++++++++++++++++
   tests/test-cases/input/TC-INPUT-012.md           | 31 ++++++++++++++++++++
   tests/test-cases/input/TC-INPUT-013.md           | 34 ++++++++++++++++++++++
   tests/test-cases/operation/TC-OPERATION-001.md   | 28 ++++++++++++++++++
   tests/test-cases/operation/TC-OPERATION-002.md   | 28 ++++++++++++++++++
   tests/test-cases/operation/TC-OPERATION-003.md   | 28 ++++++++++++++++++
   tests/test-cases/operation/TC-OPERATION-004.md   | 28 ++++++++++++++++++
   tests/test-cases/operation/TC-OPERATION-005.md   | 28 ++++++++++++++++++
   tests/test-cases/operation/TC-OPERATION-006.md   | 27 +++++++++++++++++
   tests/test-cases/validation/TC-VALIDATION-001.md | 31 ++++++++++++++++++++
   tests/test-cases/validation/TC-VALIDATION-002.md | 31 ++++++++++++++++++++
   tests/test-cases/validation/TC-VALIDATION-003.md | 31 ++++++++++++++++++++
   tests/test-cases/validation/TC-VALIDATION-004.md | 31 ++++++++++++++++++++
   tests/test-cases/validation/TC-VALIDATION-005.md | 31 ++++++++++++++++++++
   tests/test-cases/validation/TC-VALIDATION-006.md | 32 ++++++++++++++++++++
   tests/test-cases/validation/TC-VALIDATION-007.md | 34 ++++++++++++++++++++++
   tests/test-runs/.gitkeep                         |  0
   tests/test-summary/.gitkeep                      |  0
   49 files changed, 1390 insertions(+)
