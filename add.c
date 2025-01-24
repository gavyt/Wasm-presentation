#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int add(int first, int second)
{
  return first + second;
}
EMSCRIPTEN_KEEPALIVE
int main()
{

}