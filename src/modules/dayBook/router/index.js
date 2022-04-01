// el @ apunta a src
export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/modules/dayBook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "NoEntrySelected",
      component: () =>
        import(
          /* webpackChunkName: "NoEntrySelected" */ "@/modules/dayBook/views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "EntryView",
      component: () =>
        import(
          /* webpackChunkName: "NoEntrySelected" */ "@/modules/dayBook/views/EntrView.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id
        };
      }
    },
  ],
};
