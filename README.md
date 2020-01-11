If running on windows, you'll need to create a ~/.huskyrc file with the following contents:

```
if [ -t 1 ]; then
  exec < /dev/tty
fi
```

per this issue: https://github.com/typicode/husky/issues/627#issuecomment-573056564

and possibly this in ~/.bashrc

```
# Prevent "stdin: is not a tty" errors
if [ $(expr index "$-" i) -eq 0 ]; then
    return
fi
```
