# Git Commit Log

- **Sinh viên / Người thực hiện**: Nguyễn Hoàng Phi
- **MSSV**: 23120320

---

## Chi tiết lịch sử

```text
* commit 5490b7fc8110ff3fdfb801f285eb258f0226660e
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 22:38:00 2026 +0700
| 
|     docs: fix traceability matrix
| 
|  reports/ai-audit-report-23120320.md       |   7 ++
|  tests/test-summary/traceability-matrix.md | 112 ++++++++++++++--------------
|  2 files changed, 63 insertions(+), 56 deletions(-)
|
* commit 59d1437f7af02e81b5dfdcaca03fef653dca4f74
| Merge: cff4e78 acaccd4
| Author: Nguyễn Hoàng Phi <145087008+hoangphi117@users.noreply.github.com>
| Date:   Mon Sep 28 19:59:33 2026 +0700
|
|     Merge pull request #10 from hoangphi117/build-2
|
|     test(build-2): complete test run, bug reports, and traceability matrix for Build 2
|
* commit acaccd436153cca887065425ebb86dad3d1eb4ac
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 19:54:36 2026 +0700
|
|     test(build-2): complete test run, bug report BUG-003 (#9), and traceability matrix for Build 2
|
|  tests/bugs/BUG-001.md                            |   2 +-
|  tests/bugs/BUG-002.md                            |   2 +-
|  tests/bugs/BUG-003.md                            | 101 +++++++++++++++++
|  tests/test-cases/answer/TC-ANSWER-001.md         |   2 +-
|  tests/test-cases/answer/TC-ANSWER-006.md         |   2 +-
|  tests/test-cases/answer/TC-ANSWER-009.md         |   3 +-
|  tests/test-cases/calculate/TC-CALCULATE-001.md   |   2 +-
|  tests/test-cases/calculate/TC-CALCULATE-008.md   |   2 +-
|  tests/test-cases/input/TC-INPUT-009.md           |   2 +-
|  tests/test-cases/input/TC-INPUT-010.md           |   2 +-
|  tests/test-cases/input/TC-INPUT-011.md           |   3 +-
|  tests/test-cases/input/TC-INPUT-012.md           |   2 +-
|  tests/test-cases/input/TC-INPUT-013.md           |   2 +-
|  tests/test-cases/validation/TC-VALIDATION-001.md |   2 +-
|  tests/test-cases/validation/TC-VALIDATION-002.md |   2 +-
|  tests/test-cases/validation/TC-VALIDATION-003.md |   2 +-
|  tests/test-cases/validation/TC-VALIDATION-004.md |   2 +-
|  tests/test-cases/validation/TC-VALIDATION-006.md |   2 +-
|  tests/test-cases/validation/TC-VALIDATION-007.md |   2 +-
|  tests/test-runs/TR-Build-2.md                    | 123 ++++++++++-----------
|  tests/test-summary/traceability-matrix.md        | 118 ++++++++++----------
|  21 files changed, 239 insertions(+), 141 deletions(-)
|
*   commit cc30ce8568821a0aff589d406b90dce617e2f926
|\  Merge: a6d873a 5dcb7d5
| | Author: hoangphi117 <nghphi1206@gmail.com>
| | Date:   Mon Sep 28 19:40:57 2026 +0700
| |
| |     docs: sync official GitHub issue links (#4, #5) into main
| |
| * commit 5dcb7d59102abed031352014b90ecde8beac7180
| | Author: hoangphi117 <nghphi1206@gmail.com>
| | Date:   Mon Sep 28 19:40:35 2026 +0700
| |
| |     docs(bugs): link Build 1 artifacts to official GitHub Issues #4 and #5
| |
| |  tests/bugs/BUG-001.md                            |  3 +++
| |  tests/bugs/BUG-002.md                            |  3 +++
| |  tests/test-cases/input/TC-INPUT-009.md           |  2 +-
| |  tests/test-cases/input/TC-INPUT-010.md           |  2 +-
| |  tests/test-cases/validation/TC-VALIDATION-002.md |  2 +-
| |  tests/test-cases/validation/TC-VALIDATION-003.md |  2 +-
| |  tests/test-cases/validation/TC-VALIDATION-004.md |  2 +-
| |  tests/test-runs/TR-Build-1.md                    | 10 +++++-----
| |  tests/test-summary/traceability-matrix.md        | 10 +++++-----
| |  9 files changed, 21 insertions(+), 15 deletions(-)
| |
* | commit a6d873a9da95b601dd705a50a95a422b0c1af4ad
|/  Merge: ce7096b c5e3556
|   Author: Nguyễn Hoàng Phi <145087008+hoangphi117@users.noreply.github.com>
|   Date:   Mon Sep 28 19:34:34 2026 +0700
|
|       Merge pull request #3 from hoangphi117/build-1
|
|       test(build-1): complete test run, bug reports, and traceability matrix for Build 1
|
* commit c5e3556bac4237e99db54bab71d7e478bc07596f
| Merge: 31b89ca ce7096b
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 19:32:05 2026 +0700
|
|     Merge remote-tracking branch 'origin/main' into build-1 and resolve .env conflict
|
* commit 31b89ca6f360cda535fd6036bd56917113cdd6a8
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 19:22:26 2026 +0700
|
|     test(test-run): update TR-Build-1 execution results and add multi-build traceability matrix
|
|  tests/test-runs/TR-Build-1.md             | 132 +++++++++++++---------------
|  tests/test-summary/traceability-matrix.md |  73 +++++++++++++++
|  2 files changed, 133 insertions(+), 72 deletions(-)
|
* commit 4b8ab53c8509551b73543f7fb3aa12fbc8a2e2ab
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 19:22:18 2026 +0700
|
|     docs(test-cases): update status and related bug links for failed test cases
|
|  tests/test-cases/input/TC-INPUT-009.md           | 2 +-
|  tests/test-cases/input/TC-INPUT-010.md           | 2 +-
|  tests/test-cases/validation/TC-VALIDATION-002.md | 2 +-
|  tests/test-cases/validation/TC-VALIDATION-003.md | 2 +-
|  tests/test-cases/validation/TC-VALIDATION-004.md | 2 +-
|  5 files changed, 5 insertions(+), 5 deletions(-)
|
* commit bc4e3523ec46b276754d57836fe4cf1415849b44
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 19:22:09 2026 +0700
|
|     docs(bugs): add BUG-001 and BUG-002 reports for Build 1
|
|  tests/bugs/BUG-001.md | 71 +++++++++++++++++++++++++++++++++++++++++++++++++
|  tests/bugs/BUG-002.md | 69 +++++++++++++++++++++++++++++++++++++++++++++++
|  2 files changed, 140 insertions(+)
|
* commit eecda7a9c3194b64011418e04838c7994db6a733
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 19:22:04 2026 +0700
|
|     ci(github): add bug report issue template
|
|  .github/ISSUE_TEMPLATE/bug_report.md | 51 ++++++++++++++++++++++++++++++++++
|  1 file changed, 51 insertions(+)
|
* commit 141751f7ebbe19c1c53beb0a0667268c853c46fd
| Merge: 47549ce f952620
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 18:26:31 2026 +0700
|
|     Merge branch 'main' of https://github.com/hoangphi117/tester-week03
|
* commit 47549ce98258800922b2fbe5fb0cb2ab8b1d3ad0
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 16:55:56 2026 +0700
|
|     add .env to .gitignore
|
|  .env         | Bin 264 -> 0 bytes
|  .env.example | Bin 123 -> 0 bytes
|  .gitignore   |   2 ++
|  3 files changed, 2 insertions(+)
|
* commit 4b5c62717ef6e9558e099ecccf65a6386c7f68f6
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 15:58:08 2026 +0700
|
|     add script for build 1
|
|  .env                                        | Bin 0 -> 264 bytes
|  .env.example                                | Bin 0 -> 123 bytes
|  .gitignore                                  |   5 +
|  README.md                                   |  91 ++++++++++++++++
|  package-lock.json                           |  78 ++++++++++++++
|  package.json                                |  31 ++++++
|  playwright.config.ts                        |  27 +++++
|  src/pages/calculator.page.ts                |  88 +++++++++++++++
|  src/tests/test-cases/ANS/answer.spec.ts     | 102 ++++++++++++++++++
|  src/tests/test-cases/CAL/calculate.spec.ts  | 113 ++++++++++++++++++++
|  src/tests/test-cases/INP/input.spec.ts      | 132 +++++++++++++++++++++++
|  src/tests/test-cases/OPR/operation.spec.ts  |  44 ++++++++
|  src/tests/test-cases/OPT/options.spec.ts    |  94 ++++++++++++++++
|  src/tests/test-cases/VAL/validation.spec.ts |  93 ++++++++++++++++
|  tests/test-runs/TR-Build-1.md               | 147 +++++++++++++-------------
|  15 files changed, 971 insertions(+), 74 deletions(-)
|
* commit b060d2a7c6d9cb0f2a5870c085bf3cd1cdebdc55
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 15:16:33 2026 +0700
|
|     generate test run for Build 1 and Build 2 (55 test cases)
|
|  tests/test-runs/TR-Build-1.md | 84 +++++++++++++++++++++++++++++++++++++++++
|  tests/test-runs/TR-Build-2.md | 84 +++++++++++++++++++++++++++++++++++++++++
|  2 files changed, 168 insertions(+)
|
*   commit 73943c37e548adf9ffc31a869955843d321bfd61
|\  Merge: a80822f 379c0b4
| | Author: Nguyễn Hoàng Phi <145087008+hoangphi117@users.noreply.github.com>
| | Date:   Mon Sep 28 15:12:42 2026 +0700
| |
| |     Merge pull request #1 from hoangphi117/fix/input-max-length
| |
| |     fix test cases
| |
| * commit 379c0b49ab99a2f0c9e5bbd49ab3780899c14609
|/  Author: hoangphi117 <nghphi1206@gmail.com>
|   Date:   Mon Sep 28 15:10:10 2026 +0700
|
|       fix test cases
|
|    tests/test-cases/answer/TC-ANSWER-009.md | 10 +++++++--
|    tests/test-cases/input/TC-INPUT-011.md   | 21 ++++++++++++-------
|    tests/test-cases/input/TC-INPUT-014.md   | 31 ++++++++++++++++++++++++++++
|    3 files changed, 53 insertions(+), 9 deletions(-)
|
| * commit 4f75139a14e1cc48ed28951a65549aad20426d38
|/| Merge: a80822f d37e395
| | Author: hoangphi117 <nghphi1206@gmail.com>
| | Date:   Mon Sep 28 15:06:51 2026 +0700
| |
| |     WIP on main: a80822f add OPTIONS module
| |
| * commit d37e3951ad158bd61b41ff7ed85a3ffc03642498
|/  Author: hoangphi117 <nghphi1206@gmail.com>
|   Date:   Mon Sep 28 15:06:51 2026 +0700
|
|       index on main: a80822f add OPTIONS module
|
* commit a80822f5fa6171fa617968c6674c7750c4cf54ac
| Author: hoangphi117 <nghphi1206@gmail.com>
| Date:   Mon Sep 28 14:55:49 2026 +0700
|
|     add OPTIONS module
|
|  tests/test-cases/options/TC-OPTIONS-001.md | 26 +++++++++++++++++++++
|  tests/test-cases/options/TC-OPTIONS-002.md | 30 ++++++++++++++++++++++++
|  tests/test-cases/options/TC-OPTIONS-003.md | 27 ++++++++++++++++++++++
|  tests/test-cases/options/TC-OPTIONS-004.md | 34 ++++++++++++++++++++++++++++
|  tests/test-cases/options/TC-OPTIONS-005.md | 34 ++++++++++++++++++++++++++++
|  tests/test-cases/options/TC-OPTIONS-006.md | 34 ++++++++++++++++++++++++++++
|  tests/test-cases/options/TC-OPTIONS-007.md | 34 ++++++++++++++++++++++++++++
|  tests/test-cases/options/TC-OPTIONS-008.md | 34 ++++++++++++++++++++++++++++
|  tests/test-cases/options/TC-OPTIONS-009.md | 29 ++++++++++++++++++++++++
|  9 files changed, 282 insertions(+)
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
```
