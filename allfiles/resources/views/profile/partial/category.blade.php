@if(isset($selected_category))

    @foreach($categories as $subCategory)
        <option value="{{$subCategory->id}}" @if($subCategory->id == $selected_category->parent_id) selected @endif> {{str_repeat('--',$level)}} {{$subCategory->name}}</option>
        @if(count($subCategory->childrenRecursive) > 0)
            @include('admin.partial.category',['categories' => $subCategory->childrenRecursive ,'level' => $level +1 , 'selected_category' => $selected_category])
        @endif
    @endforeach


@else

    @foreach($categories as $subCategory)
        <option value="{{$subCategory->id}}"> {{str_repeat('--',$level)}} {{$subCategory->name}}</option>
        @if(count($subCategory->childrenRecursive) > 0)
           @include('admin.partial.category',['categories' => $subCategory->childrenRecursive ,'level' => $level +1])
        @endif
    @endforeach


@endif