<template>
  <section id="table">
    <table>
      <thead>
        <th v-if="tableProps.enabled.checkbox">
          <div @click="selectAllHandler">
            <CheckBox :checkbox="checkboxControl" />
          </div>
        </th>
        <th v-for="(header, i) in tableProps.title" :key="i">{{ header }}</th>
        <th v-if="tableProps.enabled.action">Action</th>
      </thead>
      <tbody>
        <tr v-for="body in tableProps.content.result" :key="body.id">
          <td v-if="tableProps.enabled.checkbox">
            <CheckBox :checkbox="checkboxControl" />
          </td>
          <slot v-if="tableProps.enabled.slot"></slot>
          <td></td>
          <td v-for="(field, i) in tableProps.field" :key="i">
            {{ body[field] }}
          </td>

          <template v-for="(list, i) in body">
            <td
              :class="tableProps.enabled.normal ? 'normal' : ''"
              v-if="checkList(list)"
              :key="i"
            >
              <span>{{ list }}</span>
            </td>
            <td :key="i">
              <div class="book-info" :key="i">
                <span
                  :class="tableProps.normal ? ['title', 'normal'] : ['active']"
                  >{{ body.book.title }}</span
                >
                <span
                  class="author"
                  v-for="(author, i) in body.book.author"
                  :key="i"
                  >{{ author }}</span
                >
              </div>
            </td>
          </template> -->

          <!-- <td class="action" v-if="tableProps.enabled.action">
            <button
              @click="editHandler(body, body.id)"
              v-if="tableProps.enabled.edit"
            >
              <Icon icon="pencil" />
            </button>
            <button
              @click="deleteHandler(body.id, $event)"
              v-if="tableProps.enabled.remove"
            >
              <Icon icon="trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>