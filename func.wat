(module
  (func $add (param $A i32) (param $B i32) (result i32)
  local.get $A
  local.get $B
  i32.add  )
  (func $sub (param $C i32) (param $D i32) (result i32)
    local.get $C
    local.get $D
    i32.sub  ))
