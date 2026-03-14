# TypeScript Setup and Execution Guide

## 1. Steps to install TypeScript
- [Install Node.js from the official website:]( https://nodejs.org) 
- Open Command Prompt / VS Code Terminal.
- Install TypeScript globally using npm:

```bash
      npm i -g typescript
   ```

- Check if TypeScript is installed successfully:

```bash
      tsc -v
   ```
---------------------------------------------------------
## 2. Steps to Compile TypeScript File
- Create a file with `.ts` extension.

    *filename.ts*
- Add your TypeScript code inside the file.
- Open the terminal in the same folder and run:
 
 ```bash
      tsc filename.ts
```
- After compilation, TypeScript will automatically create a JavaScript file:

    *filename.js*
--------------------------------------------------------
## ▶️ 3. Steps To Run the  generated JavaScript File
- Use **Node.js** to execute the generated JavaScript file.

```bash
     node filename.js
   ```



